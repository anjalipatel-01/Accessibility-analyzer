const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const jwt = require("jsonwebtoken"); 
const User = require("./models/user");

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
// New user Register Route
app.post("/register", async (req,res)=>{
    const{username,email,password } = req.body;
    if(!username || !email || !password){
        return res.status(400).json({error:"Please fill all details"});
    }
    try{

        const exsistinguser = await User.findOne({username});
        if(exsistinguser){
            res.status(400).json({error:"Username already taken"});
        }

        const newUser = new User({username,email,password});
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    }catch(error){
        res.status(400).json({ error: "User already exsists or Invalid Data" });
    }
});
//User login Route
app.post("/login", async(req,res)=>{
    const {username,password} = req.body;
    if(!username || !password){
        res.status(400).json({error:"Please Provide username and password"});
    }
    try{
        const user = await User.findOne({ username });
        if (!user) return res.status(404).json({ error: "User not found!" });

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(404).json({error: "Invalid Password!"});
    
    const token = jwt.sign({id:user._id,username:user.username},JWT_SECRET,{expiresIN:"1d"});

     res.status(200).json({message:"Login Successful!",token,user:{id:user._id,username:user.username,
        email:user.email,},
    });
}catch(error){
    console.error(error);
    res.status(500).json({ error: "Server error during login" });
    
}
});
// LISTENER
app.listen(8080, () => {
    console.log("Server is listening on port 8080");
});
