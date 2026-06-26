import "./CTA.css";

function CTA() {
  return (
    <section className="cta">

      <div className="cta-content">

        <span className="cta-tag">
          GET CONNECTED
        </span>

        <h2>
          Start Your Journey
          <br />
          With Splunk
        </h2>

        <p>
          Protect your business with modern security, observability and AI-powered
          operations. Connect with our experts and discover how Splunk helps teams
          detect, investigate and respond faster.
        </p>

        <div className="cta-buttons">

          <button className="cta-primary">
            Contact Sales
          </button>

          <button className="cta-secondary">
            Explore Platform
          </button>

        </div>

      </div>

    </section>
  );
}

export default CTA;