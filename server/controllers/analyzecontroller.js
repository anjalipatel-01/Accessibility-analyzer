import Report from "../models/report.js";
import * as cheerio from 'cheerio';
import axios from "axios";
import ColorContrastChecker from "color-contrast-checker";
import { runAccessibilityChecks } from "../utils/accessibilityChecks.js";


export const analyzer = async (req,res)=>{
    const {html,url} = req.body;
    let htmlContent = "";
    if(html){
        htmlContent = html;
    }else if(url){
        const response = await axios.get(url);
        htmlContent = response.data;
    }else{
        return res.status(400).json({ error: "No HTML or URL provided" });
    }

    const $ = cheerio.load(htmlContent);

    const issues = [];
    
};