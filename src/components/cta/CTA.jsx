import "./CTA.css";

function CTA() {
  return (
    <section className="cta">
      <div className="cta-container">

        <span className="cta-badge">
          GET STARTED
        </span>

        <h2>
          Ready To Transform
          <br />
          Your Security Operations?
        </h2>

        <p>
          Join thousands of organizations using AI-powered
          security and observability solutions to protect,
          monitor and optimize their business.
        </p>

        <div className="cta-buttons">
          <button className="cta-primary">
            Start Free Trial
          </button>

          <button className="cta-secondary">
            Contact Sales
          </button>
        </div>

      </div>
    </section>
  );
}

export default CTA;