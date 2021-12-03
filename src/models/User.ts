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

UserSchema.pre("save", async (next) => {
  try {
    const user: ThisType = this;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;

    next();
  } catch {
    next(new Error("Error while saving user"));
  }
});

export default model<User>("User", UserSchema);
