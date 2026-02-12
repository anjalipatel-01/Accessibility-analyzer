import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { LogOut, LayoutDashboard, UserPlus, LogIn, Menu, X, Shield } from "lucide-react";

export default function Navbar() {
  const { isLoggedIn, logout, checkAuth } = useAuth();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    checkAuth();
  }, [location.pathname]);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8080/api/logout", {}, {
        withCredentials: true,
      });
      logout();
      window.location.href = "/login";
    } catch (error) {
      console.log("Logout error:", error.message);
    }
  };

  const isActive = (path) => location.pathname === path;

  const navLinkData = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/solution", label: "Solutions" },
    { to: "/compliance", label: "Compliance" },
    { to: "/company", label: "Company" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="nav-brand">
          <span className="nav-brand-icon"><Shield size={16} /></span>
          AccessGuard
        </Link>

        <div className="nav-links">
          {navLinkData.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link${isActive(to) ? " active" : ""}`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="nav-right">


          <div className="nav-auth">
            {isLoggedIn ? (
              <>

                <button onClick={handleLogout} className="btn btn-ghost btn-sm">
                  <LogOut size={16} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-ghost btn-sm">
                  <LogIn size={16} />
                  Login
                </Link>
                <Link to="/register" className="btn btn-primary btn-sm">
                  <UserPlus size={16} />
                  Sign Up
                </Link>
              </>
            )}
          </div>

          <button
            className="nav-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
