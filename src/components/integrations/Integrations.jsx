import "./Integrations.css";

function Integrations() {
  return (
    <section className="integrations">

      <span className="integration-tag">
        Integrations
      </span>

      <h2>
        Connect with the Tools
        <br />
        You Already Use
      </h2>

      <p>
        Integrate your security dashboard with cloud services,
        development platforms, and collaboration tools to manage
        everything from one place.
      </p>

      <div className="integration-grid">

        <div className="integration-card">
          <img src="/images/github.png" alt="GitHub Logo" />
          <h3>GitHub</h3>
          <p>Source code management</p>
        </div>

        <div className="integration-card">
          <img src="/images/aws.png" alt="AWS Logo" />
          <h3>AWS</h3>
          <p>Cloud infrastructure</p>
        </div>

        <div className="integration-card">
          <img src="/images/azure.png" alt="Microsoft Azure Logo" />
          <h3>Azure</h3>
          <p>Cloud computing</p>
        </div>

        <div className="integration-card">
          <img src="/images/googlecloude.png" alt="Google Cloud Logo" />
          <h3>Google Cloud</h3>
          <p>Cloud platform</p>
        </div>

        <div className="integration-card">
          <img src="/images/kubernetes.png" alt="Kubernetes Logo" />
          <h3>Kubernetes</h3>
          <p>Container orchestration</p>
        </div>

        <div className="integration-card">
          <img src="/images/docker.png" alt="Docker Logo" />
          <h3>Docker</h3>
          <p>Container management</p>
        </div>

        <div className="integration-card">
          <img src="/images/slcak.png" alt="Slcak Logo" />
          <h3>Slcak</h3>
          <p>Team communication</p>
        </div>

        <div className="integration-card">
          <img src="/images/zira.png" alt="Zira Logo" />
          <h3>Zira</h3>
          <p>Project management</p>
        </div>

      </div>

    </section>
  );
}

export default Integrations;