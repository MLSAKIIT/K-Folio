import { connectDB } from './config/db';
import dotenv from 'dotenv';
dotenv.config();
import app from './app';

const PORT = process.env.PORT || 3000;
connectDB();

app.get("/", (req:Request,res: Response) => {
  res.json({ message: "Backend Server is running", success: true });
});

app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});