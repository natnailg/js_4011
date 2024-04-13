import express, {Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'



// the first line of code other than our imports that we should run if we are using dotenv is is to configure dotenv. 
dotenv.config()

//we are going to create our app instance from the express function that we've imported 
const app: Express = express() 

//down here we are going to declrae our port  
const port = 3001

// least hardship for config 
app.use(bodyParser())


// lets set up endpoint and we going to make a get method endpoint and we're going to bind 
// it to our route address 
// our local is localhost:3001/ anything after that is our endpoint 
// the first parameter is the root/home page. the second parameter is function called handler and that handler is going to request slash repsonse objs 
// and that response obj is going to be divelerd by the express utimatly going to be delivered to the user. 

app.get('/',(req: Request, res: Response) =>{
    res.send('Hello Worldsss!')  // it simply tells it to send this specific response, whatever is the parameters. 
})


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


















