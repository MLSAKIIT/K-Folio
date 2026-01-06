import { Request } from "express";

declare global {
  namespace Express {
    interface User {
      user_handle: string;
    }

    interface Request {
      user?: User;
    }
  }
}

export {};
