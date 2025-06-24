import 'dotenv/config';
import User from "../models/user.js"; 
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password)
        return res.status(400).json({ error: "Please fill all details",
            success: false
     });
  
    try {
        const existingUser = await User.findOne({ username });
        if (existingUser){
             return res.status(400).json({ error: "Username already taken" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

         const token = jwt.sign(
            { id: newUser._id, username: newUser.username },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.status(201).json({ message: "User registered successfully",token, user:{
            id: newUser._id,
            username:newUser.username,
            email: newUser.email
        } 
    });
    } catch (error) {
        console.error("Registration Error:", error); 
        res.status(500).json({
        error: error.message || "User registration failed"
    });
}

};


export const login = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password)
        return res.status(400).json({ error: "Please provide username and password" });

    try {
        const user = await User.findOne({ username });
        if (!user)
            return res.status(404).json({ error: "User not found!" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch){
             return res.status(400).json({ error: "Invalid Password!" });
        }
 
        const tokendata = {
            id: user._id,
            username: user.username,
        };

        const token = await jwt.sign(tokendata,process.env.SECRET_KEY,{expiresIn:'1d'});
        
         return res.status(200).cookie("token",token,
            {maxAge:1*24*60*60*1000,httpOnly:true,sameSite:'strict'})
            .json({
                message:`Welcome back ${user.username}`,
                user:{
                    id : user._id,
                    username: user.username,
                },
                success:true
             })
    } catch (error) {
        res.status(500).json({ error: "Server error during login" });
    }
};

export const logout = async (req, res) => {
    try {
        return res
            .status(200)
            .cookie("token", "", { maxAge: 0, httpOnly: true, sameSite: 'strict' })
            .json({
                message: "Logged out successfully!",
                success: true
            });
    } catch (error) {
        res.status(500).json({ error: "Server error during logout" });
    }
};