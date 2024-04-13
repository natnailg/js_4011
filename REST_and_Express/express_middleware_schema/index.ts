import express, {Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import { helloWorldController } from './controllers/helloWorldController'  // import the controller 
import { myPostController } from './controllers/myPostController'
import { multiplyController } from './controllers/multiplycontroller'
import { numberValidationMiddleware } from './middleware/numbervalidationMiddleware'
import { authentication } from './middleware/authentication'



// the first line of code other than our imports that we should run if we are using dotenv is is to configure dotenv. 
dotenv.config()

//we are going to create our app instance from the express function that we've imported 
const app: Express = express() 

//down here we are going to declrae our port  
const port = 3001

// least hardship for config 
app.use(bodyParser())

// so, what is happening when we make this request, is it is going to invoke the hello world controller function. 
// that controller is going to invoke the service (helloWorldservice )
// that service has no clue it is running with express. 

app.get('/', helloWorldController)

app.post('/add',numberValidationMiddleware, myPostController)

app.post('/multiply', authentication, numberValidationMiddleware, multiplyController)



app.get('/json',(req: Request, res: Response) =>{
    
    // console.log(req.query.name) 
    console.log(req.body)
    
    res.send({
        hello: 'Hello World how are you '
    })

})


// now lets tell our app to list to that port 
app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
})


















