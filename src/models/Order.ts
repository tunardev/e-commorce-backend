import { Schema, model } from "mongoose";

const OrderSchema = new Schema(
  {},
  {
    timestamps: true, // timestamps adds createdAt and updatedAt fields
  }
); // order schema

export default model("Order", OrderSchema); // order schema is now a model and export model
