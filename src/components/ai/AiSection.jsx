import "./AiSection.css";
import { FaRobot, FaBrain, FaBolt } from "react-icons/fa";

function AiSection() {
  return (
    <section className="ai-section">

      <div className="ai-left">

        <span className="ai-badge">
          AI POWERED SECURITY
        </span>

        <h2>
          Accelerate Security
          And Operations
          With AI
        </h2>

        <p>
          Leverage advanced AI models to
          detect threats, automate workflows,
          reduce alert fatigue and improve
          operational efficiency.
        </p>

        <div className="ai-features">

          <div className="ai-feature">
            <FaBrain />
            <span>Threat Intelligence</span>
          </div>

          <div className="ai-feature">
            <FaBolt />
            <span>Workflow Automation</span>
          </div>

          <div className="ai-feature">
            <FaRobot />
            <span>AI Copilot</span>
          </div>

        </div>

      </div>

      <div className="ai-right">

        <div className="ai-dashboard">

          <div className="ai-glow"></div>

          <div className="ai-card top-card">
            <h4>AI Threat Score</h4>
            <span>97%</span>
          </div>

          <div className="ai-card middle-card">
            <h4>Security Events</h4>
            <div className="bars">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="ai-card bottom-card">
            <h4>Automation Success</h4>
            <span>+84%</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default AiSection;