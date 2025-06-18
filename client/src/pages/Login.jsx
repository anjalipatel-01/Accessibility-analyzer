import '../styles/Login.css';
import axios from 'axios';
import { useState } from 'react';

export default function Login(){
    const [username,setUsername] = useState('');
    const [password, setPassword] = useState("");
        const handlelogin = async(event)=>{
            event.preventDefault();
        try{
            const res = await axios.post("http://localhost:8080/login",{
            username,password
        });
        localStorage.setItem("token", res.data.token); 
        localStorage.setItem("user", JSON.stringify(res.data.user));
        alert("✅ Loggin Successfull" );
        console.log(res.data);
        }catch(error){
             console.error(error);
            alert("❌ Login Failed! Check your username or password.");
        }
    }
    return(
        <div className='auth-page'>
            <form onSubmit={handlelogin}>
                <input type="text" id = "username" value={username} placeholder="Enter your username" aria-label="Username" required onChange={(event)=>{setUsername(event.target.value)}} className="username-input"/>
                <input type="password" value={password} placeholder="Enter your password" aria-label="Password" required onChange={(event)=>{setPassword(event.target.value)}} className="password-input"/>
                <button type='submit' aria-label="submit" className="submit-button">Submit</button>
            </form>
        </div>
    )
}