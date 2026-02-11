import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Header() {
  const { isLoggedIn } = useAuth();

  return (
    <header className="hero-section">
      <h3 className="brand-title">AccessGuard</h3>
      <h4 className="heroh4">Your all-in-one solution for accessibility testing</h4>
      <p>Become and Stay Accessible</p>
      <p>
        Empower dev teams to reduce risk and cost with the most comprehensive automated accessibility testing toolkits for web
      </p>

      {isLoggedIn && (
        <div style={{ marginTop: '20px' }}>
          <Link to="/input">
            <button className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '1.1rem' }}>
              Analyze Website
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
