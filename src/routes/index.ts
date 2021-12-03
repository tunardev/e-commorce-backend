import express, { Request, Response } from "express";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    message: "Hello world",
    status_code: 200,
  });
});

export default router;
