
// <........................Importing express for createing Server..................>
import express, { Application, Request, Response } from "express";

// <...............Importing connection for run a Server.................>
import { connection } from "./config/db";

// <..............Importing dotenv file for accessing environment form .env file........>
import dotenv from "dotenv";

// <.................cookie parser for stroing token..............>
import cookieParser from "cookie-parser";

// <...................Importing router for making requrest ............>
import {userRouter} from "./route/userRoutes"
import { bookRouter } from "./route/bookRouter";
dotenv.config();
const app: Application = express();

app.use(cookieParser())
app.use(express.json())

// <...............Checking basic endpoint.................>
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Book Library basic Page");
});

// <.........making requrest.........>
app.use("/",userRouter)
app.use("/",bookRouter)

// <...................Listening server here.....................>
app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Server is connected to the database");
  } catch (error) {
    console.log("Error while connecting to the database");
  }
  console.log(`Server is listening on port no ${process.env.port}`);
});
