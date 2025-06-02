const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const MONGO_URL = "mongodb://127.0.0.1:27017/test";
async function main() {
    try{
        await mongoose.connect(MONGO_URL);
        console.log("✅ Connected to MongoDB");
    }catch(err){
        console.error("❌ MongoDB connection failed:", err);
    }   
};
main();
app.get("/",(req,res)=>{
    res.send("Hi i am root");
});
app.listen(8080,()=>{
    console.log("server is listening on port 8080");
});