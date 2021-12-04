import express, { Request, Response } from "express";
import mongoose from "mongoose";
import routes from "./routes";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import ioredis from "ioredis";
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URL).catch((err) => console.error(err));
export const redisClient = new ioredis();

app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors({
  credentials: true,
  origin: '*'
}));
app.use("/api/v1", routes);
app.use("*", (req: Request, res: Response) => {
  return res.status(404).json({ error: "Page not found", status_code: 404 });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
