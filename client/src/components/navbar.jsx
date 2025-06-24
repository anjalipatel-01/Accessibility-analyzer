
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="services">
        <a href="#">Services</a>
        <a href="#">Solutions</a>
        <a href="#">Compliance</a>
        <a href="#">Company</a>
      </div>

      <div className="search-auth-wrapper">
        <div className="search-container">
          <input type="text" placeholder="Search" aria-label="Search" />
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
        <div className="auth-buttons">
          <Link to="/register"><button id="register">SignUp</button></Link>
          <Link to="/login"><button id="login">Login</button></Link>
        </div>
      </div>
    </nav>
  );
}