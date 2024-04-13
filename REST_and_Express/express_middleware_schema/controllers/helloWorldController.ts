import {Express, Request, Response } from 'express'
import { helloWorldService } from '../services/hellowWorldServices'


export const helloWorldController = (req: Request, res: Response) => {
    const result = helloWorldService()
    res.send(result)
}