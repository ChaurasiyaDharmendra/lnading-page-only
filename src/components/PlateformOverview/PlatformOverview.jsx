import "./PlatformOverview.css";

function PlatformOverview() {
  return (
    <section className="platform">

      <div className="platform-left">

        <span className="platform-tag">
          Platform
        </span>

        <h2>
          Monitor Everything
          <br />
          <span>From One Dashboard</span>
        </h2>

        <p>
          View logs, monitor applications, track infrastructure,
          and manage security alerts from a single dashboard.
          ASLIM helps IT teams monitor their systems in one place.
        </p>

        <div className="platform-list">

          <div>✓ Infrastructure Monitoring</div>

          <div>✓ Log Management</div>

          <div>✓ Security Alerts</div>

          <div>✓ Incident Tracking</div>

          <div>✓ Resource Monitoring</div>

          <div>✓ Cloud Services</div>

        </div>

        <button className="platform-btn">
          View Platform
        </button>

      </div>

      <div className="platform-right">

        <img
          src="/images/Platform Overview.png"
          alt="Platform Dashboard"
          className="platform-image"
        />

      </div>

    </section>
  );
}

export default PlatformOverview;