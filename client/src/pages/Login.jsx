import '../styles/Login.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate,Link } from "react-router-dom";
import Footer from '../components/footer';

export default function Login() {
     const [input, setInput] = useState({
        username:"",
        password:""
    });

    const navigate = useNavigate();
    const changEventHandler = (e)=>{
        setInput({...input,[e.target.name]:e.target.value});
    }
    
    const submitHandler = async (e)=>{
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:8080/api/login",{
  username: input.username,
  password: input.password
},{
        withCredentials: true
      });
            if(res.data.success){
               alert("✅ Login Successful");
                navigate("/dashboard");
            }else{
              alert("❌ Login failed. Please try again.");
            }
        }catch(error){
            console.log(error);
            alert("❌ Login failed! Check your username or password.");
        }    
    };
    return (
  <div className="page-wrapper">
    <div className='auth-page'>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          id="username"
          name='username'
          value={input.username}
          placeholder="Enter your username"
          required
          onChange={changEventHandler}
          className="username-input"
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