import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import path from "path";

dotenv.config({ path: path.resolve("backend", ".env") });

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    await connectDB();
    console.log(`Server running on PORT ${PORT}`);
});