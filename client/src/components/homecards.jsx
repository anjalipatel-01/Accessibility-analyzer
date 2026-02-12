import { Bot, BadgeAlert, BookOpenCheck, ArrowUpRight } from "lucide-react";

export default function HomeCards() {
  const cards = [
    {
      icon: <Bot size={24} />,
      iconClass: "card-icon-primary",
      title: "Test Everywhere",
      text: "Easy-to-use web and mobile tools fit right into your SDLC allowing you to test everywhere.",
      accentColor: "var(--teal)",
    },
    {
      icon: <BadgeAlert size={24} />,
      iconClass: "card-icon-accent",
      title: "Find Issues Faster",
      text: "Guide both experts and accessibility novices with automated testing and human-centric AI.",
      accentColor: "var(--amber)",
    },
    {
      icon: <BookOpenCheck size={24} />,
      iconClass: "card-icon-orange",
      title: "Trust the Results",
      text: "There are no false positives to chase after. We bake standards right into the products.",
      accentColor: "var(--orange)",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose AccessGuard?</h2>
          <p>Powerful tools built for modern development teams</p>
        </div>

        <div className="grid-3">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`card animate-fade-in animate-fade-in-delay-${i + 1}`}
            >
              <div className={`card-icon ${card.iconClass}`}>{card.icon}</div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>
              <div className="card-cta" style={{ color: card.accentColor }}>
                Learn more <ArrowUpRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
