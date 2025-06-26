import express from "express";
import { register, login } from "../controllers/auth.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.post("/register",register);
router.post("/login",login);

router.get("/protected", isAuthenticated, (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user, 
  });
});


router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "Lax",
    secure: false, 
  });
  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
});

export default router;


