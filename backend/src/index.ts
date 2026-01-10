import dotenv from "dotenv";
import path from "path";
console.log("Current working directory:", process.cwd());
const result = dotenv.config();
if (result.error) {
  console.error("Dotenv config error:", result.error);
}
console.log("Environment variables loaded:", result.parsed ? Object.keys(result.parsed) : "None");
import app from "./app";
import { connectDB } from "./config/db";



const PORT = process.env.PORT || 3000;
connectDB()

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
