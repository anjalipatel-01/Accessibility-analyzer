import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Solutionhero from "../components/solutionhero";
import { Code2, Palette, BarChart3, Building, ShoppingBag, GraduationCap, HeartPulse } from "lucide-react";

export default function Solution() {
    const roles = [
        {
            icon: <Code2 size={24} />,
            title: "For Developers",
            desc: "Integrate accessibility testing into your CI/CD pipeline. Catch errors before they merge."
        },
        {
            icon: <Palette size={24} />,
            title: "For Designers",
            desc: "Annotate designs for accessibility and verify color contrast early in the process."
        },
        {
            icon: <BarChart3 size={24} />,
            title: "For Managers",
            desc: "Track compliance progerss across all your properties with high-level reporting dashboards."
        }
    ];

    const industries = [
        { icon: <HeartPulse size={20} />, name: "Healthcare" },
        { icon: <Building size={20} />, name: "Finance" },
        { icon: <GraduationCap size={20} />, name: "Education" },
        { icon: <ShoppingBag size={20} />, name: "Retail" },
    ];

    return (
        <div className="page-shell">
            <Navbar />
            <Solutionhero />

            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Solutions for Every Role</h2>
                        <p className="section-subtitle">Tailored tools to help your entire team contribute to accessibility.</p>
                    </div>

                    <div className="grid-3">
                        {roles.map((role, index) => (
                            <div key={index} className="card-info hover-lift">
                                <div className="card-icon card-icon-secondary">{role.icon}</div>
                                <h3 className="card-title">{role.title}</h3>
                                <p className="card-desc">{role.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Industries We Serve</h2>
                        <p className="section-subtitle">Trusted by organizations in highly regulated sectors.</p>
                    </div>

                    <div className="grid-2" style={{ maxWidth: "800px", margin: "0 auto" }}>
                        {industries.map((ind, index) => (
                            <div key={index} className="glass flex-center" style={{ padding: "1.5rem", gap: "1rem", justifyContent: "flex-start" }}>
                                <div className="card-icon card-icon-accent" style={{ width: "40px", height: "40px" }}>{ind.icon}</div>
                                <span style={{ fontSize: "1.1rem", fontWeight: "600", color: "var(--text-primary)" }}>{ind.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}