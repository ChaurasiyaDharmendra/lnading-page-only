import "./AiSection.css";

function AiSection() {
  return (
    <section className="ai-section">

      <div className="ai-left">

        <img
          src="/images/ai-security.png"
          alt="AI Dashboard"
          className="ai-image"
        />

      </div>

      <div className="ai-right">

        <span className="ai-tag">
          AI Monitoring
        </span>

        <h2>
          Detect Security
          <br />
          Events Faster
        </h2>

        <p>
          Use AI to monitor logs, identify unusual activity, and review
          security alerts from one dashboard. This helps your team
          understand system activity and respond to issues more quickly.
        </p>

        <div className="ai-buttons">

          <button className="primary-btn">
            View AI Dashboard
          </button>

          <button className="secondary-btn">
            Read More
          </button>

        </div>

      </div>

    </section>
  );
}

export default AiSection;