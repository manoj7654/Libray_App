import { Request, Response, NextFunction } from "express";

// <...........jwt for generating token..................>
import jwt from "jsonwebtoken";

// <.......................authentication .....................>
const authenticate=(req: Request, res: Response, next: NextFunction)=>{
    const token=req.headers?.authorization?.split(" ")[1] || req.cookies?.token
    if(token){
        const decode=jwt.verify(token,process.env.key)
        if(decode){
            const userId=decode.userId
            req.body.userId=userId
            const x_userRole=decode.role
            req.body.userrole=x_userRole
            next()
        }else{
            res.send({message:"Please Login Again"})
        }
       
    }else{
        res.send({message:"Please Login First"})
    }

}

export {authenticate}