import "./AiSection.css";

function AiSection() {
  return (
    <section className="ai-section">

      <div className="ai-left">
        <img
          src="/images/ai-security.png"
          alt="AI Security"
        />
      </div>

      <div className="ai-right">

        <span className="ai-tag">
          AI INSIGHTS
        </span>

        <h2>
          Smarter decisions
          <br />
          with AI-powered
          <br />
          analytics
        </h2>

        <p>
          Monitor applications, infrastructure, and security events
          from one platform. AI helps identify unusual activity,
          highlights important alerts, and provides clear insights
          so your team can resolve issues faster and keep systems
          running smoothly.
        </p>

        <div className="ai-buttons">

          <button className="primary-btn">
            Explore AI
          </button>

          <button className="secondary-btn">
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}

export default AiSection;