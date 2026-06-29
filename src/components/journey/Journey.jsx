import "./Journey.css";

function Journey() {
  return (
    <section className="journey">

      <div className="journey-container">

        <span className="journey-tag">
          Workflow
        </span>

        <h2>
          How ASLIM
          <br />
          Works
        </h2>

        <p className="journey-text">
          ASLIM collects logs and system information, monitors activity,
          detects security events, and helps teams respond from a single
          dashboard.
        </p>

        <div className="journey-list">

          <div className="journey-box">

            <div className="number">
              01
            </div>

            <h3>
              Collect Logs
            </h3>

            <p>
              Receive logs and events from applications,
              servers, and cloud environments.
            </p>

          </div>

          <div className="journey-box">

            <div className="number">
              02
            </div>

            <h3>
              Monitor Activity
            </h3>

            <p>
              View system health, alerts, and resource
              usage from one dashboard.
            </p>

          </div>

          <div className="journey-box">

            <div className="number">
              03
            </div>

            <h3>
              Review Alerts
            </h3>

            <p>
              Check unusual events and investigate
              security alerts quickly.
            </p>

          </div>

          <div className="journey-box">

            <div className="number">
              04
            </div>

            <h3>
              Generate Reports
            </h3>

            <p>
              Create reports and review system
              performance over time.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Journey;