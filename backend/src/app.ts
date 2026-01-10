import express, { Request, Response } from "express";
import cors from "cors";

import authRouter from "./routes/auth";
import postRouter from "./routes/postaction";

import userRouter from "./routes/user";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// health check
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Backend Server is running",
    success: true,
  });
});

// routes
app.use("/auth", authRouter);
app.use("/posts", postRouter);
app.use("/users", userRouter);

export default app;
