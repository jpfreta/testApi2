import Express,{  } from "express";
import { routers } from "./router";

export const server = Express()

server.use('/', routers)
server.listen(3001, ()=>{console.log('App ON http://localhost:3001');})