import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Mail, Phone, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="page-shell">
      <Navbar />
      <main style={{ flex: 1 }}>
        <section className="hero-sub" style={{ padding: "3.5rem 1.5rem 3rem" }}>
          <div className="container">
            <div className="hero-content animate-fade-in" style={{ textAlign: "left" }}>
              <h1 className="hero-title">
                Contact <span className="gradient-text">AccessGuard</span>
              </h1>
              <p className="hero-desc">
                AccessGuard's solutions take the guesswork out of digital
                accessibility. We have friendly experts who are eager to help you.
              </p>
            </div>
          </div>
        </section>

        <div className="container section">
          <div className="contact-grid">
            <div className="contact-info animate-fade-in">
              <h2 style={{ fontSize: "1.5rem", fontWeight: "800", marginBottom: "1rem", color: "var(--text-primary)" }}>
                We'd love to hear from you!
              </h2>
              <p style={{ color: "var(--text-secondary)", lineHeight: "var(--leading-relaxed)", marginBottom: "2rem" }}>
                Looking for advice on which digital accessibility tools, services
                or training offers are the best fit for your goals? Let us know
                to get a fast and tailored response.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text-secondary)" }}>
                  <div className="card-icon card-icon-primary" style={{ width: "40px", height: "40px" }}>
                    <Mail size={18} />
                  </div>
                  <span>support@accessguard.com</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--text-secondary)" }}>
                  <div className="card-icon card-icon-accent" style={{ width: "40px", height: "40px" }}>
                    <Phone size={18} />
                  </div>
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>

            <div className="contact-form-card animate-fade-in animate-fade-in-delay-1">
              <form>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    Name <span>*</span>
                  </label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Email <span>*</span>
                  </label>
                  <div className="input-icon-wrapper">
                    <Mail size={16} className="input-icon" />
                    <input type="email" id="email" placeholder="john@example.com" required />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="phone">
                    Phone Number
                  </label>
                  <div className="input-icon-wrapper">
                    <Phone size={16} className="input-icon" />
                    <input type="tel" id="phone" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="concern">
                    Concern <span>*</span>
                  </label>
                  <textarea
                    id="concern"
                    rows="4"
                    placeholder="Tell us about your concern..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%" }}>
                  <Send size={16} />
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
