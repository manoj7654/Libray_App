
// <........................Importing express..................>

import express, { Request, Response } from "express";


// <..............Importing BookModel for creating book and finding book........>
import {BookModel} from "../model/bookModel"



// <............Create a book..............>

const add=async(req: Request, res: Response)=>{
    const { title, author,userId } = req.body;

 
 
    const book = new BookModel({ title, author,userId });
    try {
      await book.save();
      res.send({ msg: "Book created successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).send({ msg: "Internal Server Error" });
    }
}


// <.............Get books based on user role...............>

const getBook=async(req: Request, res: Response)=>{
    const { userrole } = req.body;
    
    const { old, new: newBooks } = req.query;
    const query: any = {};

    if (old === "1") {
      query.createdAt = { $lte: new Date(Date.now() - 10 * 60 * 1000) };
    } else if (newBooks === "1") {
      query.createdAt = { $gt: new Date(Date.now() - 10 * 60 * 1000) };
    }

    try {
      if (userrole.includes("VIEW_ALL")) {
        const books = await BookModel.find(query);
        res.send(books);
      } else if (userrole.includes("VIEWER")) {
        const userId = req.body.userId;
        const books = await BookModel.find({ userId, ...query });
        res.send(books);
      } else {
        res.send("You are not authorized to view books");
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("Internal Server Error");
    }
}



export { add,getBook };