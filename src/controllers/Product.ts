import { Response } from "express";
import Product from "../models/Product";
import { RequestUser } from "../types/types";

export const getProducts = async (req: RequestUser, res: Response) => {
  try {
    const products = await Product.find();
    const array = [];

    products.forEach((product) => {
      delete product.__v;
      array.push(product);
    });

    return res.status(200).json({ data: array, status_code: 200 });
  } catch (err) {
    return res.status(500).json({ error: err.message, status_code: 500 });
  }
};

export const getProduct = async (req: RequestUser, res: Response) => {
  const { id } = req.params;

  try {
    const product = await Product.find({ _id: id });
    return res.status(200).json({ data: product, status_code: 200 });
  } catch (err) {
    return res.status(500).json({ error: err.message, status_code: 500 });
  }
};

export const createProduct = async (req: RequestUser, res: Response) => {
  const categories = ["electronics", "clothes", "food", "others"];
  const newProduct = new Product({ ...req.body, userId: req.user._id });

  let error;
  for (const category of req.body.categories) {
    if (!categories.includes(category)) {
      error = true;
      break;
    }
  }

  if (error)
    return res.status(400).json({
      message: "unnecessary category content",
      status_code: 400,
    });

  try {
    await newProduct.save();
    delete newProduct.__v;
    return res.status(200).json({ data: newProduct, status_code: 200 });
  } catch (err) {
    return res.status(500).json({ error: err.message, status_code: 500 });
  }
};

export const updateProduct = async (req: RequestUser, res: Response) => {
  const { id } = req.params;
  const categories = ["electronics", "clothes", "food", "others"];

  let error;
  for (const category of req.body.categories) {
    if (!categories.includes(category)) {
      error = true;
      break;
    }
  }

  if (error)
    return res.status(400).json({
      message: "unnecessary category content",
      status_code: 400,
    });

  const productData = await Product.findOne({ _id: id, userId: req.user._id });
  if (!productData)
    return res.status(400).json({
      error: "Product not found",
      status_code: 400,
    });

  try {
    await Product.updateOne(
      { _id: id, userId: req.user._id },
      { $set: req.body }
    );
    return res.status(200).json({
      data: {
        ...req.body,
        userId: req.user._id,
      },
    });
  } catch (err) {
    return res.status(500).json({ error: err.message, status_code: 500 });
  }
};

export const deleteProduct = async (req: RequestUser, res: Response) => {
  const { id } = req.params;

  const productData = await Product.findOne({ _id: id, userId: req.user._id });
  if (!productData)
    return res.status(400).json({
      error: "Product not found",
      status_code: 400,
    });

  try {
    await Product.deleteOne({ _id: id, userId: req.user._id });
    return res.status(200).json({ data: true, status_code: 200 });
  } catch (err) {
    return res.status(500).json({ error: err.message, status_code: 500 });
  }
};