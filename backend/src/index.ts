import dotenv from "dotenv";
dotenv.config();
import app from "./app";
import { connectDB } from "./config/db";



const PORT = process.env.PORT || 3000;
connectDB()

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
