import "./FeatureCards.css";

function FeatureCards() {
  return (
    <section className="feature-section">

      <h2>
        When disruption isn't an option
      </h2>

      <p>
        Trust the unified platform for security and observability at massive scale.
      </p>

      <div className="feature-row">

        <div className="feature-card">

            <img
  src="/images/Digital resilience platform.svg"
  alt="Digital resilience platform"
  className="feature-icon"
/>

          <h3>Digital resilience platform</h3>

          <p>
            Unify cross-domain machine data at petabyte scale into
            contextualized trusted intelligence. Give teams and AI
            a complete foundation to preempt issues and activate
            AgenticOps.
          </p>

          <button>
            Explore Splunk Platform
          </button>

        </div>

        <div className="feature-card">

          <img
  src="/images/Agentic SOC.svg"
  alt="Agentic SOC"
  className="feature-icon"
/>

          <h3>Agentic SOC</h3>

          <p>
            Unify threat detection, investigation and response
            with AI and built-in threat intelligence.
            Use AI to anticipate, find and stop emerging threats
            at machine speed.
          </p>

          <button>
            Explore Splunk Security
          </button>

        </div>

        <div className="feature-card">

              <img
  src="/images/Agentic observability.svg"
  alt="Agentic observability"
  className="feature-icon"
/>

          <h3>Agentic observability</h3>

          <p>
            See the business impact of every performance problem
            across applications, infrastructure and AI workloads.
            Use AI to predict, investigate and resolve issues faster.
          </p>

          <button>
            Explore Splunk Observability
          </button>

        </div>

      </div>

    </section>
  );
}

export default FeatureCards;