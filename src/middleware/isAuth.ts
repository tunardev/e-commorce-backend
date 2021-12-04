import { Response, NextFunction } from "express";
import User from "../models/User";
import { RequestUser, UserPayload } from "../types/types";
import jwt from "jsonwebtoken";

export default async (req: RequestUser, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token)
    return res.status(401).json({ error: "Unauthenticated", status_code: 401 });

  let data;
  try {
    data = jwt.verify(token, process.env.JWT_SECRET) as UserPayload;
    next();
  } catch {
    return res.status(401).json({ error: "Unauthenticated", status_code: 401 });
  }

  const { id } = data;
  const userData = await User.findById(id);

  if (!userData)
    return res.status(400).json({ error: "User not found", status_code: 400 });

  delete userData.password;
  delete userData.__v;
  req.user = userData;
  next();
};
