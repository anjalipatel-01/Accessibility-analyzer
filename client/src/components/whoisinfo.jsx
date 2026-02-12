import { Users, Code, BarChart3, ArrowUpRight } from "lucide-react";

export default function WhoisInfo() {
  const audiences = [
    {
      icon: <Code size={20} />,
      color: "var(--teal)",
      title: "Web Development Teams & Agencies",
      desc: "Identify and comprehend accessibility problems within the context of a fully loaded page.",
    },
    {
      icon: <Users size={20} />,
      color: "var(--amber)",
      title: "Test Engineers",
      desc: "Effortlessly integrate accessibility testing into your routine build processes.",
    },
    {
      icon: <BarChart3 size={20} />,
      color: "var(--orange)",
      title: "Development Leaders",
      desc: "Incorporate consistent standards, rules, and testing across the SDLC.",
    },
  ];

  return (
    <section className="audience-section">
      <div className="section-header">
        <h2>Who is AccessGuard for?</h2>
        <p>Built for every role in the development lifecycle</p>
      </div>

      <div className="audience-grid">
        {audiences.map((item, i) => (
          <div key={i} className="audience-card animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
            <div style={{ color: item.color, marginBottom: "0.75rem" }}>{item.icon}</div>
            <h4 style={{ color: item.color }}>{item.title}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}