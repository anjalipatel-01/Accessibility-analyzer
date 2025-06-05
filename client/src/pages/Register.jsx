import './Register.css'; 
export default function Register(){
    return(
        <div className='auth-page'>
            <form>
                <input type="text" id = "username" placeholder="Enter your username" aria-label="Username" className="username-input" required/>
                <input type="email" placeholder="Enter your email" aria-label="Email" required className="email-input"/>
                <input type="password" placeholder="Enter your password" aria-label="Password" required className="password-input"/>
                <button aria-label="submit" className="submit-button">Submit</button>
            </form>
        </div>
    )
}