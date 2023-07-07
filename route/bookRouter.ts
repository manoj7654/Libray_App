import express, { Request, Response } from "express";
import { authenticate } from "../middleware/authentication";
import { authorize } from "../middleware/authorization";
import {add,getBook} from "../controller/books.controller"
import {logger} from "../middleware/logger"

const bookRouter=express.Router();

// <...............for creating books.................>
bookRouter.post("/books",authenticate,authorize(["CREATOR"]),logger,add)

// <....................for getting books......................>
bookRouter.get("/books",authenticate,authorize(["VIEWER","VIEW_ALL"]),logger,getBook)


export {bookRouter}