import express from "express";
import { analyzer } from "../controllers/analyzecontroller.js";
const router = express.Router();

router.post("/analyze",analyzer);
export default router;