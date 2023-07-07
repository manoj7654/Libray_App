import express from "express"
const userRouter=express.Router()

import {register,login} from "../controller/user.controller"

userRouter.post("/register",register)
userRouter.post("/login",login)



export {userRouter}