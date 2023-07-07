
// // <........................Importing express for createing Server..................>

// const express=require("express")
// const app=express();

// // <..............Importing dotenv file for accessing environment form .env file........>

// require("dotenv").config()


// // <...............Importing connection for run a Server.................>

// import {connection} from "./config/db"



// // <...............Checking basic endpoint.................>

// app.get("/",(req,res)=>{
//     res.send("Welcome to the Book Library basic Page")
// })




// // <...................Listening server here.....................>

// app.listen(process.env.port,async()=>{
//     try {
//         await connection;
//         console.log("Server is connected to database")
//     } catch (error) {
//         console.log("Getting error while connecting database")
//     }
//     console.log(`Server is listening on port no ${process.env.port}`)
// })

import express, { Application, Request, Response } from "express";
import { connection } from "./config/db";
import dotenv from "dotenv";

dotenv.config();
const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Book Library basic Page");
});

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  try {
    await connection;
    console.log("Server is connected to the database");
  } catch (error) {
    console.log("Error while connecting to the database");
  }
  console.log(`Server is listening on port no ${port}`);
});
