export default function Infocards(){
    return(
        <section className="Usage">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">🔍 Why Accessibility Matters</h5>
            <p className="card-text">
              Over 1 billion people worldwide live with a disability. Accessibility ensures that
              everyone can perceive, navigate, and interact with the web. It's not just a legal
              requirement, it's a commitment to inclusive design.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">🧩 Top 5 Accessibility Violations</h5>
            <p className="card-text">
              ❌ No alt attribute on images<br />
              ❌ Low contrast text<br />
              ❌ Missing labels on form inputs
            </p>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">🌐 Web Accessibility Today</h5>
            <p className="card-text">
              → 98% of homepages have WCAG failures<br />
              → 70% fail color contrast
            </p>
          </div>
        </div>
      </section>
    );
};