import mongoose, { Schema, model } from "mongoose";
import { Product } from "../types/models";

const reviewSchema = new Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const ProductSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
    image: { type: String, required: true },
    categories: { type: [String], required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, default: null },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);

export default model<Product>("Product", ProductSchema);
