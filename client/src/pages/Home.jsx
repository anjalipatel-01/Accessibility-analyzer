import React from "react";
import Navbar from "../components/navbar";
import Header from "../components/header";
import HomeCards from "../components/homecards";
import Footer from "../components/footer";
import { Shield, Users, Globe, BarChart3 } from "lucide-react";

export default function Home() {
    return (
        <div className="page-shell">
            <Navbar />
            <Header />

            {/* Stats ribbon */}
            <section className="stats-ribbon">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-item animate-fade-in">
                            <div className="stat-value">1B+</div>
                            <div className="stat-label">People with Disabilities</div>
                        </div>
                        <div className="stat-item animate-fade-in animate-fade-in-delay-1">
                            <div className="stat-value">98%</div>
                            <div className="stat-label">Homepages Fail</div>
                        </div>
                        <div className="stat-item animate-fade-in animate-fade-in-delay-2">
                            <div className="stat-value">50+</div>
                            <div className="stat-label">WCAG Checks</div>
                        </div>
                        <div className="stat-item animate-fade-in animate-fade-in-delay-3">
                            <div className="stat-value">0</div>
                            <div className="stat-label">False Positives</div>
                        </div>
                    </div>
                </div>
            </section>

            <HomeCards />
            <Footer />
        </div>
    );
}
