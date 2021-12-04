import { Request } from "express";

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
    user: any;
  }
}
