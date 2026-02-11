import bcrypt from "bcryptjs";
import User from "../models/user.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  let { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "Please fill all fields" });
  }

  // Trim inputs
  username = username.trim();
  email = email.trim();

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "Username already taken" });
    }

    const newUser = new User({ username, email, password });

    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id, username: newUser.username },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );

    // Auto-login: Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "Lax",
      secure: false, // change to true in production with HTTPS
    });

    res.status(201).json({
      message: "User registered and logged in successfully",
      token,
      user: { id: newUser._id, username: newUser.username, email },
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const login = async (req, res) => {
  let { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ error: "Missing fields" });

  // Trim email
  email = email.trim();

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: '1d' });

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "Lax",
      secure: false, // change to true in production with HTTPS
    });

    return res.status(200).json({ message: "Login successful", success: true });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};


export const logout = async (req, res) => {
  try {
    return res
      .status(200)
      .cookie("token", "", { maxAge: 0, httpOnly: true, sameSite: 'lax', secure: false })
      .json({
        message: "Logged out successfully!",
        success: true
      });
  } catch (error) {
    res.status(500).json({ error: "Server error during logout" });
  }
};