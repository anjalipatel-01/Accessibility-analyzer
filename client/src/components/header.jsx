import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { Sparkles, Zap } from "lucide-react";

export default function Header() {
  const { isLoggedIn } = useAuth();

  return (
    <section className="hero">
      <div className="hero-content animate-fade-in">
        <div className="hero-badge">
          <Zap size={14} />
          AI-Powered Accessibility Testing
        </div>

        <h1 className="hero-title">
          Build a More{" "}
          <span className="gradient-text">Accessible Web</span>
        </h1>

        <p className="hero-subtitle">
          Your all-in-one solution for accessibility testing. Empower teams to build inclusive digital experiences with automated, standards-based analysis.
        </p>

        {isLoggedIn && (
          <div className="hero-actions">
            <Link to="/input#input-section" className="btn btn-glow">
              <Sparkles size={18} />
              Analyze Website
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
