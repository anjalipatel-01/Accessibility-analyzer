import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/navbar";
import Header from "../components/header";
import AnalyzeButton from "../components/analyzebutton";
import Infocards from "../components/infocards";
import WhoisInfo from "../components/whoisinfo";
import Footer from "../components/footer";
import { Loader2 } from "lucide-react";

export default function Dashboard() {
  const { user, isLoggedIn, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      navigate("/login");
    }
  }, [loading, isLoggedIn, navigate]);

  if (loading) {
    return (
      <div className="page-shell">
        <Navbar />
        <div className="flex-center" style={{ flex: 1 }}>
          <Loader2 size={40} className="spin" style={{ color: "var(--teal)" }} />
        </div>
        <Footer />
      </div>
    );
  }

  // Fallback if not logged in but effect hasn't redirected yet
  if (!user && !isLoggedIn) return null;

  return (
    <div className="page-shell">
      <Navbar />
      <main>
        <Header />
        <div className="container section animate-fade-in">
          {/* Welcome Message */}
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "1.5rem", color: "var(--navy)" }}>
              Welcome, <span className="gradient-text">{user?.username || "User"}</span>!
            </h2>
            <p style={{ color: "var(--text-secondary)" }}>Here's your accessibility overview.</p>
          </div>

          <AnalyzeButton />
          <Infocards />
          <WhoisInfo />
        </div>
      </main>
      <Footer />
    </div>
  );
}
