import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface UserPayload {
  id: string;
}

interface RequestUser extends Request {
  user: string;
}

export default (req: RequestUser, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token)
    return res.status(401).json({ error: "Unauthenticated", status_code: 401 });

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET) as UserPayload;
    req.user = data.id;

    next();
  } catch {
    return res.status(401).json({ error: "Unauthenticated", status_code: 401 });
  }
};
