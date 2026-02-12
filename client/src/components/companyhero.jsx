import { Link } from "react-router-dom";
import { Building2, ArrowRight } from "lucide-react";

export default function Companyhero() {
    return (
        <section className="hero-sub">
            <div className="container">
                <div className="hero-content animate-fade-in">
                    <div className="hero-badge">
                        <Building2 size={14} />
                        Our Story
                    </div>
                    <h1 className="hero-title">
                        About <span className="gradient-text">AccessGuard</span> Systems
                    </h1>
                    <p className="hero-desc">
                        We aim to empower developers, businesses, and educators by providing
                        easy-to-use tools that highlight accessibility issues and encourage
                        inclusive design practices.
                    </p>
                    <p className="hero-desc">
                        Our Mission: To build meaningful tools that make the web a more
                        inclusive place for everyone. This project reflects our passion for
                        frontend development, and the values of inclusive design.
                    </p>
                    <div className="hero-actions" style={{ justifyContent: "flex-start" }}>
                        <Link to="/contact" className="btn btn-primary">
                            Contact Us
                            <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}