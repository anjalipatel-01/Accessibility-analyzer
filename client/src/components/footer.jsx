import { Link } from "react-router-dom";
import { Copyright, Linkedin, Github, Twitter, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <h3>AccessGuard</h3>
            <p>
              Built with <Heart size={12} style={{ display: "inline", color: "var(--accent)" }} /> for a more inclusive web. Empowering teams to build accessible digital experiences.
            </p>
          </div>

          <div className="footer-col">
            <h4>Product</h4>
            <Link to="/services">Services</Link>
            <Link to="/solution">Solutions</Link>
            <Link to="/compliance">Compliance</Link>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <Link to="/company">About Us</Link>
            <Link to="/">Home</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            <Copyright size={12} style={{ display: "inline", verticalAlign: "-1px" }} />{" "}
            2025 AccessGuard Inc. All rights reserved.
          </span>

          <div className="footer-social">
            <a href="#" aria-label="LinkedIn"><Linkedin size={16} /></a>
            <a href="#" aria-label="GitHub"><Github size={16} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={16} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
