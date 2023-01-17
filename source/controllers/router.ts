import Express, { Request, Response } from "express";


export const routers = Express.Router()

routers.use(Express.static('views'))
routers.get('/', (req:Request, res:Response)=>{
    res.send('index')
})