
//    <..............Importing mongose for creating connection...................>
import mongoose from "mongoose";

// <..............Importing dotenv file for accessing environment form .env file........>
import dotenv from "dotenv";
dotenv.config();

// <..................Making connection........................>

if (!process.env.mongoUrl) {
    throw new Error("MongoDB connection URL is not set");
}
const connection = mongoose.connect(process.env.mongoUrl);


// <....................exporting connection...........................>

export {connection}








