<<<<<<< HEAD
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user';
=======
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user";
>>>>>>> 3a36c27 (fix backend auth, post controller and typings)

const JWT_SECRET = process.env.JWT_SECRET || "devsecret";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };

    const user = await User.findById(decoded.userId).select("_id");
    if (!user) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.userId = user._id.toString(); // 👈 ONLY THIS
    next();
  } catch {
    return res.status(401).json({ message: "Invalid token" });
  }
};
