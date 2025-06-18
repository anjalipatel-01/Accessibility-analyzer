import { Bot, BadgeAlert, BookOpenCheck } from 'lucide-react';

export default function HomeCards() {
  return (
    <section className="Usage">
      <div className="card" style={{ width: '18rem', backgroundColor: '#EFD5F2' }}>
        <div className="card-body" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '1rem' }}>
            <Bot />
          </div>
          <h5 className="card-title">Test Everywhere</h5>
          <p className="card-text">
            Easy-to-use web and mobile tools fit right into your SDLC allowing you to test everywhere.
          </p>
        </div>
      </div>

      <div className="card" style={{ width: '18rem', backgroundColor: '#EFD5F2' }}>
        <div className="card-body" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '1rem' }}>
            <BadgeAlert size={24} />
          </div>
          <h5 className="card-title">Find Issues Faster</h5>
          <p className="card-text">
            Guide both experts and accessibility novices with automated accessibility testing, machine learning, and human-centric AI.
          </p>
        </div>
      </div>

      <div className="card" style={{ width: '18rem', backgroundColor: '#EFD5F2' }}>
        <div className="card-body" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '48px', marginBottom: '1rem' }}>
            <BookOpenCheck />
          </div>
          <h5 className="card-title">Trust the Results</h5>
          <p className="card-text">
            There are no false positives to chase after. We bake our involvement and understanding of the standards right into the products.
          </p>
        </div>
      </div>
    </section>
  );
}
