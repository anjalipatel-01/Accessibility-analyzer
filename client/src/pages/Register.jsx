import '../styles/Register.css'; 
import axios from 'axios';
import { useState } from 'react';
import { Link,useNavigate } from "react-router-dom";
import Footer from '../components/footer';

export default function Register() {
    // const navigate = useNavigate();
    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState("");

    // const handleregister = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const res = await axios.post("http://localhost:8080/register", {
    //             username,
    //             email,
    //             password
    //         });

    //         navigate("/dashboard");
    //     } catch (error) {
    //         console.error("Frontend Registration Error:", error);
    //         const errorMessage = error.response?.data?.error || error.message || "Unknown error";
    //         alert("❌ Registration Failed: " + errorMessage);
    //     }
    // };
    const [input, setInput] = useState({
        username:"",
        email:"",
        password:""
    });

    const navigate = useNavigate();
    const changEventHandler = (e)=>{
        setInput({...input,[e.target.name]:e.target.value});
    }
    
    const submitHandler = async (e)=>{
    e.preventDefault();
    try {
        console.log("Sending data:", input);
        const res = await axios.post("http://localhost:8080/api/register",  input ,{
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if(res.data?.user) {
            navigate("/dashboard");
        } else {
            alert("Something went wrong");
            navigate("/register");
        }
    } catch(error) {
        const errorMessage = error.response?.data?.error || "Unknown error";
        alert("❌ Registration Failed: " + errorMessage);
        console.log("Frontend error:", errorMessage);
    }
};
    return (
        <div className="page-wrapper"> 
            <div className='auth-page'>
                <form onSubmit={submitHandler}>
                    <input
                        type="text"
                        name='username'
                        value={input.username}
                        id="username"
                        placeholder="Enter your username"
                        aria-label="Username"
                        className="username-input"
                        onChange={changEventHandler}
                        required
                    />
                    <input
                        type="email"
                        value={input.email}
                        name='email'
                        placeholder="Enter your email"
                        aria-label="Email"
                        required
                        onChange={changEventHandler}
                        className="email-input"
                    />
                    <input
                        type="password"
                        name='password'
                        value={input.password}
                        placeholder="Enter your password"
                        aria-label="Password"
                        required
                        onChange={changEventHandler}
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