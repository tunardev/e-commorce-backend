import { Request } from "express";

export interface UserPayload {
  id: string;
}

export interface RequestUser extends Request {
  user: any;
}
