import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
import ejs from "ejs";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authroutes.js";

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
app.use(express.urlencoded({extended:true}));
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true,              
}));

// ROUTES
app.get("/", (req, res) => {
    res.send("Hi I am root");
});

app.use("/api", authRoutes);

// LISTENER
app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
