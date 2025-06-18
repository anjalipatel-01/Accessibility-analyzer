const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const cors = require("cors");
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
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
    res.send("Hi I am root");
});
const authRoutes = require("./routes/authRoutes");
app.use("/api", authRoutes);

// LISTENER
app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
