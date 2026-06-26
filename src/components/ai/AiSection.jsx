import "./AiSection.css";

function AiSection() {
  return (
    <section className="ai-section">

      <div className="ai-left">
        <img src="/images/ai-security.png" alt="AI Security" />
      </div>

      <div className="ai-right">

        <span className="ai-tag">
          AI SECURITY
        </span>

        <h2>
          AI built for
          <br />
          observability and
          <br />
          security
        </h2>

        <p>
          Get complete visibility across your infrastructure with
          AI-powered monitoring and security analytics. Detect
          threats faster, reduce operational effort and improve
          performance using one intelligent platform.
        </p>

        <div className="ai-buttons">
          <button className="primary-btn">
            Discover AI
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