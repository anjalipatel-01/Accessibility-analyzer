import '../styles/Login.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate,Link } from "react-router-dom";
import Footer from '../components/footer';

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handlelogin = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/login", {
                username,
                password
            });

            // localStorage.setItem("token", res.data.token);
            // localStorage.setItem("user", JSON.stringify(res.data.user));

            alert("✅ Login Successful");
            navigate("/dashboard");
        } catch (error) {
            console.error("Login error:", error);
            alert("❌ Login Failed! Check your username or password.");
        }
    }

    const handlechange= ()=>{
        navigate("/login");
    }
    return (
  <div className="page-wrapper">
    <div className='auth-page'>
      <form onSubmit={handlelogin}>
        <input
          type="text"
          id="username"
          value={username}
          placeholder="Enter your username"
          required
          onChange={(e) => setUsername(e.target.value)}
          className="username-input"
        />
        <input
          type="password"
          value={password}
          placeholder="Enter your password"
          required
          onChange={(e) => setPassword(e.target.value)}
          className="password-input"
        />
        <button type='submit' className="submit-button">
          Submit
        </button>
        <span>Don't have an account? <Link to="/register">SignUp</Link></span>
      </form>
    </div>
    <Footer />
  </div>
);
}