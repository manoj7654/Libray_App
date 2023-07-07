import mongoose, { Document, Schema } from "mongoose";

export interface Book extends Document {
  title: string;
  author: string;
  userId:  Schema.Types.ObjectId,
  createdAt: Date;

}

const bookSchema = new mongoose.Schema<Book>(
  {
    title: String,
    author: String,
    userId: { type: Schema.Types.ObjectId, ref: "users" },
    createdAt: { type: Date, default: Date.now },
  },
  { versionKey: false,
 
   }
);

const BookModel = mongoose.model<Book>("Book", bookSchema);

export { BookModel };