import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import authRouter from "./routes/auth";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// app.use((req, res, next) => {
//   const start = Date.now();
//   res.on("finish", () => {
//     const duration = Date.now() - start;
//     const method = req.method;
//     const url = req.originalUrl;
//     const status = res.statusCode;
//     const ip = req.ip;
//     console.log(`[${new Date().toISOString()}] ${method} ${url} ${status} ${duration}ms ip=${ip}`);
//   });
//   next();
// });

connectDB();

app.get("/", (req:Request,res: Response) => {
  res.json({ message: "Backend Server is running", success: true });
});

app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
