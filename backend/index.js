import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import path from "path";

import authRoutes from "./routes/authRoutes.js"

dotenv.config({ path: path.resolve("backend", ".env") });

const app = express();

app.use(express.json());

app.use("/api/auth",authRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Server is working!" });
});

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server running on PORT ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
};

startServer();