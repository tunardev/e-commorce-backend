import { Request, Response, NextFunction } from "express";

export default (schema) => (req: Request, res: Response, next: NextFunction) => {
  const { error } = schema.validate(req.body);
  if (error) {
    const errorMessage = error.details.map((i) => i.message).join(", ");
    return res.status(400).json({ error: errorMessage, status_code: 400 });
  }

  next();
};
