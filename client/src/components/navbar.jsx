export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="search-auth-wrapper">
        <input type="text" placeholder="Search" aria-label="Search" />
        <div className="auth-buttons">
          <button id="register">Register</button>
          <button id="login">Login</button>
        </div>
      </div>

      <div className="services">
        <a href="#">Services</a>
        <a href="#">Solutions</a>
        <a href="#">Compliance</a>
        <a href="#">Company</a>
      </div>
    </nav>
  );
}
