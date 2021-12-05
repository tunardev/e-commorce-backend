import { Request } from "express";
import { User } from "./types/models";

declare namespace NodeJS {
  interface ProcessEnv {
    MONGODB_URL: string;
    REDIS_URL: string;
    PORT: string;
    JWT_SECRET: string;
    CORS_ORIGIN: string;
  }
}

declare global {
  interface RequestUser extends Request {
    user: User;
  }
}
