import { Eye, FormInput, TrendingUp } from "lucide-react";

export default function Infocards() {
  const cards = [
    {
      icon: <Eye size={22} />,
      color: "var(--teal)",
      title: "Why Accessibility Matters",
      content: (
        <p className="card-text">
          Over 1 billion people worldwide live with a disability. Accessibility
          ensures that everyone can perceive, navigate, and interact with the
          web. It's a commitment to inclusive design.
        </p>
      ),
    },
    {
      icon: <FormInput size={22} />,
      color: "var(--amber)",
      title: "Top Violations",
      content: (
        <ul className="card-text" style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <li>❌ No alt attribute on images</li>
          <li>❌ Low contrast text</li>
          <li>❌ Missing labels on form inputs</li>
        </ul>
      ),
    },
    {
      icon: <TrendingUp size={22} />,
      color: "var(--orange)",
      title: "Web Today",
      content: (
        <ul className="card-text" style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <li>→ 98% of homepages have failures</li>
          <li>→ 70% fail color contrast</li>
        </ul>
      ),
    },
  ];

  return (
    <section style={{ padding: "1rem 0" }}>
      <div className="grid-3">
        {cards.map((card, i) => (
          <div key={i} className="card card-info">
            <div className="card-info-header">
              <span style={{ color: card.color }}>{card.icon}</span>
              <h3>{card.title}</h3>
            </div>
            {card.content}
          </div>
        ))}
      </div>
    </section>
  );
}