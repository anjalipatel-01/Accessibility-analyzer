const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password)
        return res.status(400).json({ error: "Please fill all details" });

    try {
        const existingUser = await User.findOne({ username });
        if (existingUser)
            return res.status(400).json({ error: "Username already taken" });

        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(400).json({ error: "User already exists or Invalid Data" });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password)
        return res.status(400).json({ error: "Please provide username and password" });

    try {
        const user = await User.findOne({ username });
        if (!user)
            return res.status(404).json({ error: "User not found!" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(400).json({ error: "Invalid Password!" });

        const token = jwt.sign(
            { id: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: "1d" }
        );

        res.status(200).json({
            message: "Login Successful!",
            token,
            user: {
                id: user._id,
                username: user.username,
                email: user.email
            },
        });
    } catch (error) {
        res.status(500).json({ error: "Server error during login" });
    }
};
