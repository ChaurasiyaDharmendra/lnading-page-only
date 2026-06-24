import "./Research.css";

function ResearchSection() {
  return (
    <section className="research">
      <div className="research-container">

        <div className="research-left">

          <span className="research-badge">
            ADVANCED ANALYTICS
          </span>

          <h2>
            Gain Real-Time
            <br />
            Visibility Across
            <br />
            Your Enterprise
          </h2>

          <p>
            Monitor infrastructure, applications, logs and
            security events from one unified platform.
            Turn data into actionable insights with
            AI-powered analytics.
          </p>

          <ul className="research-list">
            <li>✓ Real-time monitoring</li>
            <li>✓ Predictive analytics</li>
            <li>✓ Threat detection</li>
            <li>✓ Unified observability</li>
          </ul>

        </div>

        <div className="research-right">

          <div className="analytics-card">

            <div className="analytics-header">
              Security Analytics
            </div>

            <div className="analytics-chart">

              <div className="bar b1"></div>
              <div className="bar b2"></div>
              <div className="bar b3"></div>
              <div className="bar b4"></div>
              <div className="bar b5"></div>
              <div className="bar b6"></div>
              <div className="bar b7"></div>
              <div className="bar b8"></div>

            </div>

          </div>

          <div className="metrics-row">

            <div className="metric-box">
              <h3>99.9%</h3>
              <span>System Uptime</span>
            </div>

            <div className="metric-box">
              <h3>500+</h3>
              <span>Apps Monitored</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ResearchSection;