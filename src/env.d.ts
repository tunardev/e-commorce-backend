declare namespace NodeJS {
  export interface ProcessEnv {
    MONGODB_URL: string;
    REDIS_URL: string;
    PORT: string;
    JWT_SECRET: string;
    CORS_ORIGIN: string;
  }
}
