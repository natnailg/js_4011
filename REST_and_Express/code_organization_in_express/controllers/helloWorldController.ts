import {Express, Request, Response } from 'express'
import { helloWorldService } from '../services/hellowWorldService'


export const helloWorldController = (req: Request, res: Response) => {
    const result = helloWorldService()
    res.send(result)
}