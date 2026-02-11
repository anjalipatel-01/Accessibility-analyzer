import '../styles/Login.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import Footer from '../components/footer';

export default function Login() {
  const [input, setInput] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  const changEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/login", {
        email: input.email,
        password: input.password
      }, {
        withCredentials: true
      });
      if (res.data.success) {
        // alert("✅ Login Successful"); // Removed as per request
        navigate("/dashboard");
      } else {
        alert("❌ Login failed. Please try again.");
      }
    } catch (error) {
      console.log(error);
      alert("❌ Login failed! Check your email or password.");
    }
  };
  return (
    <div className="page-wrapper">
      <div className='auth-page'>
        <form onSubmit={submitHandler}>
          <input
            type="email"
            id="email"
            name='email'
            value={input.email}
            placeholder="Enter your email"
            required
            onChange={changEventHandler}
            className="username-input" // Keeping class for styling consistency if needed
          />
          <input
            type="password"
            name='password'
            value={input.password}
            placeholder="Enter your password"
            required
            onChange={changEventHandler}
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