import express, { Request, Response } from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth";
import { connectDB } from "./config/db";

dotenv.config();

const app = express();

// middleware
app.use(express.json());

// test route
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Backend Server is running",
    success: true,
  });
});

// routes
app.use("/auth", authRouter);

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
