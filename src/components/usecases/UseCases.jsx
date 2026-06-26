import "./UseCases.css";

function UseCases() {
  return (
    <section className="usecases">

      <h2>Business Solutions</h2>

      <p>
        Explore how Splunk helps organizations improve
        security and system monitoring.
      </p>

      <div className="cards">

        <div className="card">
          <h3>Security</h3>
          <p>
            Detect threats quickly and keep your systems secure.
          </p>
          <a href="/">Learn More</a>
        </div>

        <div className="card">
          <h3>Monitoring</h3>
          <p>
            Monitor applications, servers and cloud services
            from one place.
          </p>
          <a href="/">Learn More</a>
        </div>

        <div className="card">
          <h3>Cloud</h3>
          <p>
            Track cloud resources and improve performance.
          </p>
          <a href="/">Learn More</a>
        </div>

        <div className="card">
          <h3>Automation</h3>
          <p>
            Automate daily tasks and save valuable time.
          </p>
          <a href="/">Learn More</a>
        </div>

      </div>

    </section>
  );
}

export default UseCases;