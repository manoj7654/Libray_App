import express from "express"
const userRouter=express.Router()

import {register,login} from "../controller/user.controller"


// <..............for register user...................>
userRouter.post("/register",register)


// <...................for login user......................>
userRouter.post("/login",login)



export {userRouter}