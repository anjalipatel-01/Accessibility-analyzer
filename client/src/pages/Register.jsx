import '../styles/Register.css'; 
import axios from 'axios';
import { useState } from 'react';
export default function Register(){
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState("");
    const handleregister = async(event)=>{
        event.preventDefault();
        try{
            const res = await axios.post("http://localhost:8080/register",{
                username,email,passwrod
            });
            alert("✅ Registered: " + res.data.message);
        }catch(error){
            alert("Registration Failed!");
        }
    }
    return(
        <div className='auth-page'>
            <form onSubmit={handleregister}>
                <input type="text" value={username} id = "username" placeholder="Enter your username" aria-label="Username" className="username-input" onChange={(event)=> setUsername(event.target.value)} required/>
                <input type="email" value={email} placeholder="Enter your email" aria-label="Email" required onChange={(event)=> setEmail(event.target.value)} className="email-input"/>
                <input type="password" value={password} placeholder="Enter your password" aria-label="Password" required onChange={(event)=> setPassword(event.target.value)} className="password-input"/>
                <button type="submit" aria-label="submit" className="submit-button">Submit</button>
            </form>
        </div>
    )
}