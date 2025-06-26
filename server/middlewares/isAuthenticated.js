import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
  const token = req.cookies?.token;
  console.log("🔐 Token from cookie:", token); 

  if (!token) {
    return res.status(401).json({
      message: "User not authenticated!",
      success: false
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token!",
      success: false
    });
  }
};

export default isAuthenticated;
