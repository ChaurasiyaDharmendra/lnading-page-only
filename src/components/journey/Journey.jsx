import "./Journey.css";

function Journey() {
  return (
    <section className="journey">

      <div className="journey-container">

        <p className="journey-tag">
          HOW IT WORKS
        </p>

        <h2>
          How Our Platform
          <br />
          Works
        </h2>

        <p className="journey-text">
          Our platform helps you collect system data,
          monitor activity, identify issues and keep
          your applications running smoothly.
        </p>

        <div className="journey-list">

          <div className="journey-box">

            <div className="number">
              01
            </div>

            <h3>
              Collect Data
            </h3>

            <p>
              Gather logs, metrics and events from
              applications, servers and cloud services.
            </p>

          </div>

          <div className="journey-box">

            <div className="number">
              02
            </div>

            <h3>
              Monitor Systems
            </h3>

            <p>
              Track application health and system
              performance from one dashboard.
            </p>

          </div>

          <div className="journey-box">

            <div className="number">
              03
            </div>

            <h3>
              Detect Issues
            </h3>

            <p>
              Find unusual activity and receive alerts
              before problems become serious.
            </p>

          </div>

          <div className="journey-box">

            <div className="number">
              04
            </div>

            <h3>
              Improve Performance
            </h3>

            <p>
              Use reports and insights to improve
              reliability and system efficiency.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Journey;