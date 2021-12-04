import { Schema, model } from "mongoose";
import { User } from "../types/models";
import bcrypt from "bcrypt";

interface ThisType {
  password: string;
}

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default model<User>("User", UserSchema);
