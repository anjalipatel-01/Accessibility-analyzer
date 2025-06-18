import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Dashboard.css"; 
import Navbar from '../components/navbar';
import Header from '../components/header';
import TestSiteButton from '../components/testsitebutton';
import Infocards from "../components/infocards";
import WhoisInfo from "../components/whoisinfo";
import Footer from "../components/footer";
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
      <Navbar/>
      <Header/>
      <TestSiteButton/>
      <Infocards/>
      <WhoisInfo/>
      <Footer/>
    </div>
  );
}