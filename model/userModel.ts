import mongoose, { Document } from "mongoose";

export interface User extends Document {
  email: string;
  password: string;
  role: string[];
}

// <...............user schema......................>

const userSchema = new mongoose.Schema<User>(
  {
    email: String,
    password: String,
    role: [{ type: String, enum: ["CREATOR", "VIEWER", "VIEW_ALL"], default: ["VIEWER"] }],
  },
  { versionKey: false }
);

// <...............user model...................>

const UserModel = mongoose.model<User>("users", userSchema);

export { UserModel };