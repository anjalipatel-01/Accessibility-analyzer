import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios"; 
import { Menu } from 'lucide-react';

export default function Navbar() {
  const [isloggedIn, setisloggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get("http://localhost:8080/api/protected", {
          withCredentials: true,
        });
        setisloggedIn(true); 
      } catch (error) {
        setisloggedIn(false); 
      }
    };
    checkAuth();
  }, [location.pathname]);

  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8080/api/logout", {}, {
        withCredentials: true,
      });
      setisloggedIn(false);
      window.location.href = "/login";
    } catch (error) {
      console.log("Logout error:", error.message);
    }
  };

  return (
    <nav className="navbar">
      <div className="services">
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/solution">Solutions</a>
        <a href="/compliance">Compliance</a>
        <a href="/company">Company</a>
      </div>

      <div className="search-auth-wrapper">
        <div className="search-container">
          <input type="text" placeholder="Search" aria-label="Search" />
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        {isloggedIn ? (
          <>
          <Link to="/dashboard" className="btn btn-outline-secondary me-2" id="dashboard-btn">
            Dashboard
          </Link>
          <button onClick={handleLogout} id="logout">Logout</button></>
        
        ) : (
          <>
            <Link to="/login" id="login">Login</Link>
            <Link to="/register" id="signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}
