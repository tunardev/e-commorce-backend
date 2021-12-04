import { Schema, model } from "mongoose";
import { User } from "../types/models";

const UserSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true, // timestamps adds createdAt and updatedAt fields
  }
); // user schema

export default model<User>("User", UserSchema); // user schema is now a model and export model