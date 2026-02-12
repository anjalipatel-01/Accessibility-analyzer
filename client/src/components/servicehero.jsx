import { Link } from "react-router-dom";
import { Headphones, ArrowRight } from "lucide-react";

export default function Servicehero() {
    return (
        <section className="hero-sub">
            <div className="container">
                <div className="hero-content animate-fade-in">
                    <div className="hero-badge">
                        <Headphones size={14} />
                        Expert Support
                    </div>
                    <h1 className="hero-title">
                        Digital Accessibility Testing <span className="gradient-text">Services</span>
                    </h1>
                    <p className="hero-subtitle" style={{ margin: "0 0 1rem" }}>
                        Practical, strategic support & sustainable results.
                    </p>
                    <p className="hero-desc">
                        With top experts and a proven methodology, we're prepared to help you
                        establish your accessibility efforts and grow them to new heights.
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