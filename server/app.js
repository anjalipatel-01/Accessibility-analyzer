import 'dotenv/config';
import express from "express";
import ejs from "ejs";
import mongoose from "mongoose";
import cors from "cors";
import cookieparser from "cookie-parser";

const app = express();
const router = express.Router();
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
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const corsOptions = {
    origin:'https://localhost:5173',
    credentials:true,
}
app.use(cors(corsOptions));

// ROUTES
app.get("/", (req, res) => {
    res.send("Hi I am root");
});
import authRoutes from "./routes/authroutes.js";
app.use("/", authRoutes);

// LISTENER
app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
