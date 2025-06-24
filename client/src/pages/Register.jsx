import '../styles/Register.css'; 
import axios from 'axios';
import { useState } from 'react';
import { Link,useNavigate } from "react-router-dom";
import Footer from '../components/footer';

export default function Register() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");

    const handleregister = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/register", {
                username,
                email,
                password
            });

            navigate("/dashboard");
        } catch (error) {
            console.error("Frontend Registration Error:", error);
            const errorMessage = error.response?.data?.error || error.message || "Unknown error";
            alert("❌ Registration Failed: " + errorMessage);
        }
    };

    
    return (
        <div className="page-wrapper"> 
            <div className='auth-page'>
                <form onSubmit={handleregister}>
                    <input
                        type="text"
                        value={username}
                        id="username"
                        placeholder="Enter your username"
                        aria-label="Username"
                        className="username-input"
                        onChange={(event) => setUsername(event.target.value)}
                        required
                    />
                    <input
                        type="email"
                        value={email}
                        placeholder="Enter your email"
                        aria-label="Email"
                        required
                        onChange={(event) => setEmail(event.target.value)}
                        className="email-input"
                    />
                    <input
                        type="password"
                        value={password}
                        placeholder="Enter your password"
                        aria-label="Password"
                        required
                        onChange={(event) => setPassword(event.target.value)}
                        className="password-input"
                    />
                    <button
                        id="register"
                        type="submit"
                        aria-label="submit"
                        className="submit-button"
                    >
                        Submit
                    </button>
                    <span>Already have an account? <Link to="/login">Login</Link></span>
                </form>
            </div>
            <Footer />
        </div>
    );
}