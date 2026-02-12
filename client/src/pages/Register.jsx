import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { User, Mail, Lock, UserPlus } from "lucide-react";

export default function Register() {
    const [input, setInput] = useState({
        username: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const { checkAuth } = useAuth();

    const navigate = useNavigate();
    const changEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
        setError("");
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/api/register", input, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });
            if (res.data?.user) {
                await checkAuth();
                navigate("/dashboard");
            }
        } catch (error) {
            const errorMessage = error.response?.data?.error || "Registration Failed";
            setError(errorMessage);
        }
    };

    return (
        <div className="page-shell">
            <Navbar />
            <div className="flex-center" style={{ flex: 1, padding: "2rem 1rem" }}>
                <div className="auth-card animate-fade-in">
                    <div className="auth-header">
                        <h2>Create Account</h2>
                        <p>Join AccessGuard and build accessible web</p>
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
                            <label className="form-label">Full Name</label>
                            <div className="input-icon-wrapper">
                                <User size={16} className="input-icon" />
                                <input
                                    type="text"
                                    name="username"
                                    value={input.username}
                                    placeholder="John Doe"
                                    required
                                    onChange={changEventHandler}
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Email Address</label>
                            <div className="input-icon-wrapper">
                                <Mail size={16} className="input-icon" />
                                <input
                                    type="email"
                                    name="email"
                                    value={input.email}
                                    placeholder="john@example.com"
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
                            <UserPlus size={18} />
                            Create Account
                        </button>
                    </form>

                    <div className="auth-footer">
                        Already have an account? <Link to="/login">Log In</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
