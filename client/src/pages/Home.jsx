
export default function Homepage(){
    return(
        <div>
            <nav className="navbar">
                <div>
                    <input type="text" placeholder="Search" aria-label="Search"/>
                    <button id="login">Login</button>
                </div>
                <div className="services">
                    <a href="#">Services</a>
                    <a href="#">Solutions</a>
                    <a href="#">Compliance</a>
                    <a href="#">Company</a>
                </div>
            </nav>
            <header className="Herosection">
                <h3 className="heroh3">AccessGuard</h3>
                <h4 className="heroh4">Your all-in-one solution for accessibility testing</h4>
                <p>Become and Stay Accessible</p>
                <p>Empower dev teams to reduce risk and cost with the most 
                    comprehensive automated accessibility testing toolkits for web </p>
            </header>
            <main>
            <button>Test your site</button>
            </main>
             <section className="Usage">
                <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Test Everywhere</h5>
                        <p className="card-text">Easy-to-use web and mobile tools fit right into your SDLC allowing you to test everywhere.</p>
                    </div>
                </div>

                <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Find Issues Faster</h5>
                        <p className="card-text">Guide both experts and accessibility novices with automated accessibility testing, machine learning, and human-centric AI.</p>
                    </div>
                </div>

                <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                        <h5 className="card-title">Trust the Results</h5>
                        <p className="card-text">There are no false positives to chase after. We bake our involvement and understanding of the standards right into the products.</p>
                    </div>
                </div>
            </section>
            <footer>
                <p className="Contactus">Contact us <br></br> 
                Copyright 2025,AccessGuard Incorporation,All rights reserved </p>
            </footer>
        </div>

    );
}
