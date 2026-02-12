import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Servicehero from "../components/servicehero";
import { ClipboardCheck, Wrench, GraduationCap, Activity, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <ClipboardCheck size={24} />,
      title: "Audits & Testing",
      desc: "Comprehensive manual and automated testing against WCAG 2.1/2.2 standards. content."
    },
    {
      icon: <Wrench size={24} />,
      title: "Remediation",
      desc: "Our developers fix your code directly or provide detailed guidance for your team."
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Training",
      desc: "Workshops and resources to upskill your design and engineering teams on accessibility best practices."
    },
    {
      icon: <Activity size={24} />,
      title: "Monitoring",
      desc: "Continuous scanning to ensure new updates don't introduce new accessibility violations."
    }
  ];

  return (
    <div className="page-shell">
      <Navbar />
      <Servicehero />

      <section className="section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Comprehensive Accessibility Services</h2>
            <p className="section-subtitle">Everything you need to make your digital product inclusive.</p>
          </div>

          <div className="grid-2">
            {services.map((service, index) => (
              <div key={index} className="card-info hover-lift">
                <div className="card-icon card-icon-primary">{service.icon}</div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-desc">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">A simple, proven approach to accessibility compliance.</p>
          </div>

          <div className="grid-3">
            <div className="card-plain text-center">
              <div className="step-number">01</div>
              <h3>Assess</h3>
              <p>We evaluate your current state through automated scans and manual audits.</p>
            </div>
            <div className="card-plain text-center">
              <div className="step-number">02</div>
              <h3>Fix</h3>
              <p>We help you remediate issues and implement robust accessibility features.</p>
            </div>
            <div className="card-plain text-center">
              <div className="step-number">03</div>
              <h3>Maintain</h3>
              <p>We set up monitoring and training to ensure long-term compliance.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
