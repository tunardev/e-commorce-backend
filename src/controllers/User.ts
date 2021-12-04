import { Request, Response } from "express";
import { UserPayload } from "../types/types";
import User from "../models/User";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as redis from "../utils/redis";

export const login = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  const userData = await User.findOne({ username, email });
  if (!userData)
    return res.status(400).json({ error: "User not found", status_code: 400 });

  const isMatch = await bcrypt.compare(password, userData.password);
  if (!isMatch)
    return res
      .status(400)
      .json({ error: "Password is incorrect", status_code: 400 });

  const token = jwt.sign({ id: userData._id }, process.env.JWT_SECRET);

  delete userData.password;
  delete userData._id;
  delete userData.__v;
  return res.status(200).json({
    data: {
      ...userData,
      token,
    },
    status_code: 200,
  });
};

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  new User({ email, username, password: hashPassword }).save(
    (err, userData) => {
      if (err)
        return res.status(500).json({ error: err.message, status_code: 500 });

      const token = jwt.sign({ id: userData._id }, process.env.JWT_SECRET);

      delete userData.password;
      delete userData._id;
      delete userData.__v;
      return res.status(200).json({
        data: {
          token,
          username: userData.username,
          email: userData.email,
        },
        status_code: 200,
      });
    }
  );
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

  delete userData.password;
  delete userData._id;
  delete userData.__v;
  return res.status(200).json({ data: userData, status_code: 200 });
};

export const forgotPassword = async (req: Request, res: Response) => {
  return res.status(200).json({});
};

export const changePassword = (req: Request, res: Response) => {
  return res.status(200).json({});
};
