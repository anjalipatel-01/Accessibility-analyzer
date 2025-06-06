import { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css"; 
import { Copyright,CircleUserRound,Linkedin,Github, Twitter,Bot,BadgeAlert,BookOpenCheck } from 'lucide-react';



export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [url, setUrl] = useState("");
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = JSON.parse(localStorage.getItem("user"));

    if (!token) {
      window.location.href = "/login";
    } else {
      setUser(userData);
      // Fetch reports (dummy for now, later from backend)
      setReports([
        { url: "https://example.com", date: "2024-06-01" },
        { url: "https://yourwebsite.in", date: "2024-05-30" },
      ]);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  const handleTest = async () => {
    if (!url.trim()) return alert("Please enter a website URL.");
    // Later: send to backend for analysis
    alert(`Testing accessibility of: ${url}`);
    setUrl("");
  };

   return (
    <div className="dashboard-container">
      <nav className="navbar">
        <div className="search-auth-wrapper">
          <input type="text" placeholder="Search" aria-label="Search" />
          <div className="auth-buttons">
            <button id="logout" onClick={() => {
              localStorage.clear();
              window.location.href = "/login";
            }}>
              Logout
            </button>
          </div>
        </div>
        <div className="services">
          <a href="#">Services</a>
          <a href="#">Solutions</a>
          <a href="#">Compliance</a>
          <a href="#">Company</a>
        </div>
      </nav>

      <header className="Herosection">
        <h2 className="brand-title">Welcome{user ? `, ${user.username}` : ""} to AccessGuard 👋</h2>
        <h3 className="heroh4">Your all-in-one solution for accessibility testing</h3>
        <p>Become and Stay Accessible</p>
        <p>
          Empower dev teams to reduce risk and cost with the most comprehensive automated
          accessibility testing toolkits for the web.
        </p>
      </header>

      <main>
        <div className="center-button">
          <button>Test Your Site</button>
        </div>
      </main>

      <section className="Usage">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">🔍 Why Accessibility Matters</h5>
            <p className="card-text">
              Over 1 billion people worldwide live with a disability. Accessibility ensures that
              everyone can perceive, navigate, and interact with the web. It's not just a legal
              requirement, it's a commitment to inclusive design.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">🧩 Top 5 Accessibility Violations</h5>
            <p className="card-text">
              ❌ No alt attribute on images<br />
              ❌ Low contrast text<br />
              ❌ Missing labels on form inputs
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">🌐 Web Accessibility Today</h5>
            <p className="card-text">
              → 98% of homepages have WCAG failures<br />
              → 70% fail color contrast
            </p>
          </div>
        </div>
      </section>

      <section className="who-is-section">
        <h3 >Who is AccessGuard for?</h3>
        <div>
          <h4>Web development teams & agencies</h4>
          <p>Identify and comprehend accessibility problems within the context of a fully loaded page.</p>
          <h4>Test engineers</h4>
          <p>Effortlessly integrate accessibility testing into your routine build processes.</p>
          <h4>Development leaders</h4>
          <p>Incorporate consistent standards, rules, and testing across the SDLC.</p>
        </div>
      </section>

      <footer>
        <p className="Contactus">Contact us <CircleUserRound size={15} /> <br></br> 
        <Copyright size={14} /> Copyright 2025, AccessGuard Incorporation, All rights reserved </p>
        <p><Linkedin size={14} />&nbsp;<Github size={14} />&nbsp;<Twitter size={14} /></p>
    </footer>
    </div>
  );
}