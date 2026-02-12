import { Link } from "react-router-dom";
import { Puzzle, ArrowRight } from "lucide-react";

export default function Solutionhero() {
    return (
        <section className="hero-sub">
            <div className="container">
                <div className="hero-content animate-fade-in">
                    <div className="hero-badge">
                        <Puzzle size={14} />
                        Smart Solutions
                    </div>
                    <h1 className="hero-title">
                        Implementing Digital Accessibility{" "}
                        <span className="gradient-text">Solutions</span>
                    </h1>
                    <p className="hero-desc">
                        Find the web accessibility solutions that work best for you. Combine
                        tools, services and training to help you implement your own
                        accessibility testing and compliance programs.
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