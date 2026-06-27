import "./PlatformOverview.css";

function PlatformOverview() {
  return (
    <section className="platform">

      <div className="platform-left">

        <span className="platform-tag">
          Platform Overview
        </span>

        <h2>
          One Platform.
          <br />
          <span>Complete Visibility.</span>
        </h2>

        <p>
          Bring your infrastructure, applications, logs, metrics, and AI
          insights together in one unified platform. Monitor performance,
          detect issues early, and make faster operational decisions with
          complete visibility across your entire environment.
        </p>

        <div className="platform-list">

          <div>✓ Real-Time Infrastructure Monitoring</div>

          <div>✓ Centralized Log Analytics</div>

          <div>✓ AI-Powered Operational Insights</div>

          <div>✓ Intelligent Alerts & Incident Response</div>

          <div>✓ Performance & Resource Analytics</div>

          <div>✓ Enterprise-Scale Cloud Observability</div>

        </div>

        <button className="platform-btn">
          Explore Platform
        </button>

      </div>

      <div className="platform-right">

        <img
          src="/images/Platform Overview.png"
          alt="Platform Overview"
          className="platform-image"
        />

      </div>

    </section>
  );
}

export default PlatformOverview;