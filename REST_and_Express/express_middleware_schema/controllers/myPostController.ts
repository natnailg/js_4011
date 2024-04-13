import {Express, Request, Response } from 'express'
import { myPostService } from '../services/myPostService'

export const myPostController = (req: Request, res: Response) => {
    const {num1, num2} = req.body


    const result = myPostService(num1, num2)

    console.log("Result", result)
    
    res.json(result)
    //use json not send!!! send see it as status. 

}
