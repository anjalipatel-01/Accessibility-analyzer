import Report from "../models/report.js";
import * as cheerio from 'cheerio';
import axios from "axios";
import ColorContrastChecker from "color-contrast-checker";
import { runAccessibilityChecks } from "../utils/accessibilityChecks.js";


export const analyzer = async (req, res) => {
  try {
    const { html, url } = req.body;
    let htmlContent = "";

    if (html) {
      htmlContent = html;
    } else if (url) {
      // 1. URL Validation
      try {
        new URL(url); // Throws if invalid
      } catch (e) {
        return res.status(400).json({ error: "Invalid URL provided." });
      }

      // 2. Fetch with Size Limit (e.g., 5MB)
      const maxSize = 5 * 1024 * 1024; // 5MB
      const response = await axios.get(url, {
        maxContentLength: maxSize,
        maxBodyLength: maxSize,
        timeout: 10000, // 10 seconds timeout
        headers: {
          'User-Agent': 'AccessibilityAnalyzer/1.0' // Good practice
        }
      });
      htmlContent = response.data;
    } else {
      return res.status(400).json({ error: "No HTML or URL provided" });
    }

    // 3. Sanitization
    const $ = cheerio.load(htmlContent);
    $('script').remove();
    $('iframe').remove();
    $('style').remove();
    $('object').remove();
    $('embed').remove();
    $('link[rel="stylesheet"]').remove(); // Remove external verification styles if any

    // Continue with analysis on sanitized content
    const issues = runAccessibilityChecks($);
    return res.status(200).json({ issues });
  } catch (err) {
    console.error("Analyze error:", err.message);
    return res.status(500).json({ error: "Failed to analyze HTML/URL." });
  }
};
