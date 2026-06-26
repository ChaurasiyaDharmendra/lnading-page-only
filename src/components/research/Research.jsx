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
            Monitor Your
            <br />
            Infrastructure
            <br />
            With Confidence
          </h2>

          <p>
            Keep track of servers, applications and cloud
            resources from one place. Quickly identify issues,
            monitor performance and maintain system reliability.
          </p>

          <ul className="research-list">
            <li>✓ Live Monitoring</li>
            <li>✓ Performance Reports</li>
            <li>✓ Security Alerts</li>
            <li>✓ Cloud Visibility</li>
          </ul>

        </div>

        <div className="research-right">

          <img
            src="/images/Security Analytics.png"
            alt="Security Analytics"
            className="research-image"
          />

        </div>

      </div>

    </section>
  );
}

export default ResearchSection;