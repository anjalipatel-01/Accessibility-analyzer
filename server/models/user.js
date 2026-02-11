// models/User.js
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Your username is required"],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
});
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 12);
  next();
});
export default mongoose.model("User", userSchema);
