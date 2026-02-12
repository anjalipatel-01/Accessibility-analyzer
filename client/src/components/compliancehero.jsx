import { Link } from "react-router-dom";
import { ShieldCheck, ArrowRight } from "lucide-react";

export default function Compliancehero() {
    return (
        <section className="hero-sub">
            <div className="container">
                <div className="hero-content animate-fade-in">
                    <div className="hero-badge">
                        <ShieldCheck size={14} />
                        Standards & Compliance
                    </div>
                    <h1 className="hero-title">
                        Accessibility <span className="gradient-text">Compliance</span>
                    </h1>
                    <p className="hero-desc">
                        Web accessibility is the fast growing practice of optimizing websites
                        and applications so the full functionality of that asset is available
                        to people with disabilities. There are a number of Web Standards
                        defined by the W3C and global laws that enable and enforce
                        accessibility compliance.
                    </p>

                    <div style={{ marginBottom: "2rem" }}>
                        <h3 style={{ fontSize: "1.15rem", fontWeight: "700", color: "#a5b4fc", marginBottom: "0.5rem" }}>
                            Web Content Accessibility Guidelines (WCAG)
                        </h3>
                        <p className="hero-desc" style={{ marginBottom: 0 }}>
                            WCAG is the global standard in digital accessibility guidelines. It
                            enables all organizations to measure the accessibility of content,
                            sites, and apps against documented requirements for all people,
                            including those with disabilities.
                        </p>
                    </div>

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