import "./Journey.css";

function Journey() {
  return (
    <section className="journey">

      <div className="journey-container">

        <p className="journey-tag">
          HOW IT WORKS
        </p>

        <h2>
          Simple Security
          <br />
          Workflow
        </h2>

        <p className="journey-text">
          Collect data, analyze it, respond to issues
          and improve your system performance.
        </p>

        <div className="journey-list">

          <div className="journey-box">
            <div className="number">01</div>
            <h3>Collect Data</h3>
            <p>
              Collect logs, metrics and events from
              all your systems.
            </p>
          </div>

          <div className="journey-box">
            <div className="number">02</div>
            <h3>Analyze</h3>
            <p>
              Review the collected data and identify
              important issues.
            </p>
          </div>

          <div className="journey-box">
            <div className="number">03</div>
            <h3>Respond</h3>
            <p>
              Take quick action using alerts and
              security tools.
            </p>
          </div>

          <div className="journey-box">
            <div className="number">04</div>
            <h3>Improve</h3>
            <p>
              Monitor results and improve overall
              system performance.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Journey;