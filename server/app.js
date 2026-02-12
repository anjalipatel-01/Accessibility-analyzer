import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, "../.env") });
import express from "express";
import ejs from "ejs";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authroutes.js";
import analyze from "./routes/analyze.js";
import chatRoutes from "./routes/chat.js";

const app = express();
const MONGO_URL = "mongodb://127.0.0.1:27017/test";

// Connection to MongoDB
async function main() {
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Connected to MongoDB");
    } catch (err) {
        console.error("❌ MongoDB connection failed:", err);
    }
};
main();

// MIDDLEWARE BEFORE routes
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173", "http://localhost:5174", "http://127.0.0.1:5174", "http://localhost:5175", "http://127.0.0.1:5175", "http://localhost:5176", "http://127.0.0.1:5176"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

// ROUTES
app.get("/", (req, res) => {
    res.send("Hi I am root");
});
app.use("/api", authRoutes);
app.use("/api", analyze);
app.use("/api/chat", chatRoutes);

// LISTENER
app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
