
import {Express, Request, Response, NextFunction } from 'express'


/// the next function is imported abover and used as the third parameter, which is our NextFunction
// this is the function that's called to let express know to move on to whatever the next function is in chain. 

export const numberValidationMiddleware = (req: Request, res: Response, next:  NextFunction) => {
 
    //veriguing that middleware is being called 
    console.log('middleWARE IS CALLLED')
    // of it doesn't pass then it is going to run rest dot json and it going to reutrun the ending chain 
    // if it doesn't it will call the next function which will tell express to move on to the next.
    const {num1, num2} = req.body

    if (typeof num1!== 'number' || typeof num2!== 'number') {
        res.json("Error type!!")
        return
    }
    /// move on. 
    next()


}

// // Middle ware has the ability to alter the request object 
// export const numberValidationMiddleware = (req: Request, res: Response, next:  NextFunction) => {
 
//         //veriguing that middleware is being called 
//         console.log('middleWARE IS CALLLED')
//         // of it doesn't pass then it is going to run rest dot json and it going to reutrun the ending chain 
//         // if it doesn't it will call the next function which will tell express to move on to the next.
        
       
//         req.body = {
//             ...req.body,
//             validated: true
//         }

//         const {num1, num2} = req.body
    
//         if (typeof num1!== 'number' || typeof num2!== 'number') {
//             res.json("Error type!!")
//             return
//         }
//         /// move on. 
//         next()
    
    
//     // }