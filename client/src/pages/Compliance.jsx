import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Compliancehero from "../components/compliancehero.jsx";
import { ShieldCheck, Globe, Scale, FileText } from "lucide-react";

export default function Compliance() {
    const standards = [
        {
            icon: <Globe size={24} />,
            title: "WCAG 2.1 & 2.2",
            desc: "The Web Content Accessibility Guidelines are the international standard for web accessibility."
        },
        {
            icon: <Scale size={24} />,
            title: "ADA Title III",
            desc: "Compliance with the Americans with Disabilities Act prevents legal risk in the US."
        },
        {
            icon: <ShieldCheck size={24} />,
            title: "Section 508",
            desc: "Required for all US federal agencies and organizations receiving federal funding."
        },
        {
            icon: <FileText size={24} />,
            title: "EAA",
            desc: "The European Accessibility Act sets new requirements for digital products in the EU by 2025."
        }
    ];

    return (
        <div className="page-shell">
            <Navbar />
            <Compliancehero />

            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Key Standards</h2>
                        <p className="section-subtitle">We help you navigate the complex landscape of digital accessibility laws.</p>
                    </div>

                    <div className="grid-2">
                        {standards.map((std, index) => (
                            <div key={index} className="card-info hover-lift">
                                <div className="card-icon card-icon-primary">{std.icon}</div>
                                <h3 className="card-title">{std.title}</h3>
                                <p className="card-desc">{std.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container text-center" style={{ maxWidth: "800px" }}>
                    <h2 className="section-title">Why Compliance Matters</h2>
                    <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--text-secondary)", marginBottom: "2rem" }}>
                        Beyond avoiding legal complications, accessible websites reach a wider audience,
                        improve SEO, and demonstrate a commitment to social responsibility.
                        Inclusivity is not just a requirement; it's a competitive advantage.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
}