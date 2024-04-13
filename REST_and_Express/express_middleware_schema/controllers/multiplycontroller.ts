import {Express, Request, Response } from 'express'
import { myPostService } from '../services/myPostService'
import { multiplyService } from '../services/multiplyservice'

export const multiplyController = (req: Request, res: Response) => {

    const {num1, num2} = req.body

    const result2 = multiplyService(num1, num2)


    console.log("Result: ", result2)
 

    res.json(result2)
    //use json not send!!! send see it as status. 

}
