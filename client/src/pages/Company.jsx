import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Companyhero from "../components/companyhero";
import { Users, Heart, Lightbulb, Shield } from "lucide-react";

export default function Company() {
    const values = [
        {
            icon: <Heart size={24} />,
            title: "Empathy First",
            desc: "We build with real people in mind, understanding that accessibility is about human experience."
        },
        {
            icon: <Lightbulb size={24} />,
            title: "Innovation",
            desc: "We constantly explore new technologies to make the web more inclusive and easier to use."
        },
        {
            icon: <Shield size={24} />,
            title: "Transparency",
            desc: "We believe in open standards and honest communication about compliance status."
        },
        {
            icon: <Users size={24} />,
            title: "Community",
            desc: "We foster a community of developers and designers committed to digital equality."
        }
    ];

    return (
        <div className="page-shell">
            <Navbar />
            <Companyhero />

            <section className="section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Our Values</h2>
                        <p className="section-subtitle">The principles that guide our mission to make the web accessible to everyone.</p>
                    </div>
                    <div className="grid-2">
                        {values.map((val, index) => (
                            <div key={index} className="card-info hover-lift">
                                <div className="card-icon card-icon-accent">{val.icon}</div>
                                <h3 className="card-title">{val.title}</h3>
                                <p className="card-desc">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">By the Numbers</h2>
                    </div>
                    <div className="grid-3 text-center">
                        <div className="glass" style={{ padding: "2rem" }}>
                            <div className="gradient-text" style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "0.5rem" }}>1M+</div>
                            <p>Pages Analyzed</p>
                        </div>
                        <div className="glass" style={{ padding: "2rem" }}>
                            <div className="gradient-text" style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "0.5rem" }}>500+</div>
                            <p>Happy Clients</p>
                        </div>
                        <div className="glass" style={{ padding: "2rem" }}>
                            <div className="gradient-text" style={{ fontSize: "3rem", fontWeight: "800", marginBottom: "0.5rem" }}>100%</div>
                            <p>Commitment</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}