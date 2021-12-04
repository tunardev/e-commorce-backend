import { Schema, model } from "mongoose";
import { Product } from "../types/models";

const ProductSchema = new Schema({

});

export default model<Product>("User", ProductSchema);
