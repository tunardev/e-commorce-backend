import { Document } from "mongoose";

export interface User extends Document {
  username: string;
  password: string;
  email: string;
}

export interface Review {
  name: string;
  comment: string;
  id: string;
}

export interface Product extends Document {
  name: string;
  userId: string;
  image: string;
  category: string[];
  description: string;
  price: number;
  countInStock: number;
  rating: number;
  reviews: Review[];
}

export interface Order extends Document {}
