import { Request, Response } from "express";
import Product from "../models/Product";

export const getProducts = async (req: Request, res: Response) => {
  return res.status(200).json("Hello world");
};

export const getProduct = async (req: Request, res: Response) => {
  return res.status(200).json("Hello world");
};

export const createProduct = async (req: Request, res: Response) => {
  return res.status(200).json("Hello world");
};

export const updateProduct = async (req: Request, res: Response) => {
  return res.status(200).json("Hello world");
};

export const deleteProduct = async (req: Request, res: Response) => {
  return res.status(200).json("Hello world");
};
