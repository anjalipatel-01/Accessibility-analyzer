import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Mail, Lock, LogIn } from "lucide-react";

export default function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { checkAuth } = useAuth();

  const navigate = useNavigate();
  const changEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setError(""); // clear error on change
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/api/login",
        {
          email: input.email,
          password: input.password,
        },
        {
          withCredentials: true,
        }
      );
      if (res.data.success) {
        // Update auth context state before navigating
        await checkAuth();
        navigate("/dashboard");
      }
    } catch (error) {
      console.error(error);
      const msg = error.response?.data?.error || "Login failed! Check your credentials.";
      setError(msg);
      // Fallback alert if user doesn't see the text
      // alert("❌ " + msg); 
    }
  };

  return (
    <div className="page-shell">
      <Navbar />
      <div className="flex-center" style={{ flex: 1, padding: "2rem 1rem" }}>
        <div className="auth-card animate-fade-in">
          <div className="auth-header">
            <h2>Welcome Back</h2>
            <p>Enter your credentials to access your account</p>
          </div>

          <form onSubmit={submitHandler}>
            {error && (
              <div style={{
                background: "var(--error-light)",
                color: "var(--error)",
                padding: "0.75rem",
                borderRadius: "var(--radius-md)",
                marginBottom: "1rem",
                fontSize: "0.9rem",
                textAlign: "center"
              }}>
                {error}
              </div>
            )}

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <div className="input-icon-wrapper">
                <Mail size={16} className="input-icon" />
                <input
                  type="email"
                  name="email"
                  value={input.email}
                  placeholder="name@company.com"
                  required
                  onChange={changEventHandler}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="input-icon-wrapper">
                <Lock size={16} className="input-icon" />
                <input
                  type="password"
                  name="password"
                  value={input.password}
                  placeholder="••••••••"
                  required
                  onChange={changEventHandler}
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-lg"
              style={{ width: "100%", marginTop: "0.5rem" }}
            >
              <LogIn size={18} />
              Sign In
            </button>
          </form>

          <div className="auth-footer">
            Don't have an account?{" "}
            <Link to="/register">Create account</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
