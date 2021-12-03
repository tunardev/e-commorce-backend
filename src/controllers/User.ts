import { Request, Response } from "express";
import { UserPayload } from "../types/types";
import User from "../models/User";
import jwt from "jsonwebtoken";

export const login = (req: Request, res: Response) => {
  return res.status(200).json({});
};

export const register = (req: Request, res: Response) => {
  return res.status(200).json({});
};

export const me = async (req: Request, res: Response) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token)
    return res.status(401).json({ error: "Unauthenticated", status_code: 401 });

  let data;
  try {
    data = jwt.verify(token, process.env.JWT_SECRET) as UserPayload;
  } catch {
    return res.status(401).json({ error: "Unauthenticated", status_code: 401 });
  }

  const { id } = data;
  const userData = await User.findById(id);

  if (!userData)
    return res.status(400).json({ error: "User not found", status_code: 400 });

  return res.status(200).json({ data: userData, status_code: 200 });
};

export const forgotPassword = (req: Request, res: Response) => {
  return res.status(200).json({});
};

export const changePassword = (req: Request, res: Response) => {
  return res.status(200).json({});
};
