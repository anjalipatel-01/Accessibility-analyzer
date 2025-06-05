import './Login.css';
export default function Login(){
    return(
        <div className='auth-page'>
            <form>
                <input type="text" id = "username" placeholder="Enter your username" aria-label="Username" required className="username-input"/>
                <input type="password" placeholder="Enter your password" aria-label="Password" required className="password-input"/>
                <button aria-label="submit" className="submit-button">Submit</button>
            </form>
        </div>
    )
}