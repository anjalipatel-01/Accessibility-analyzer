import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Dashboard.css";
import Navbar from "../components/navbar";
import Header from "../components/header";
import AnalyzeButton from "../components/analyzebutton";
import Infocards from "../components/infocards";
import WhoisInfo from "../components/whoisinfo";
import Footer from "../components/footer";
import {
  Copyright,
  CircleUserRound,
  Linkedin,
  Github,
  Twitter,
  Bot,
  BadgeAlert,
  BookOpenCheck,
} from "lucide-react";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [url, setUrl] = useState("");

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/protected", {
          withCredentials: true,
        });

        setUser(res.data.user); 
      } catch (err) {
        console.error("Not authenticated:", err.response?.data || err.message);
        window.location.href = "/login";
      }
    };

    checkAuth();
  }, []);

 

  return (
    <div className="dashboard-container">
      <Navbar />
      <Header />
      <AnalyzeButton />
      <Infocards />
      <WhoisInfo />
      <Footer />
    </div>
  );
}
