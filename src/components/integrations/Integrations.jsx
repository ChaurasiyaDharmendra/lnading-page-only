import "./Integrations.css";

function Integrations() {
  return (
    <section className="integrations">

      <h2>Works with Your Favorite Tools</h2>

      <p>
        Easily connect cloud platforms, DevOps tools and
        collaboration applications from one place.
      </p>

      <div className="integration-grid">

        <div className="integration-card">
          <img src="/images/github.png" alt="GitHub" />
          <h3>GitHub</h3>
          <p>Manage source code</p>
        </div>

        <div className="integration-card">
          <img src="/images/aws.png" alt="AWS" />
          <h3>AWS</h3>
          <p>Cloud platform</p>
        </div>

        <div className="integration-card">
          <img src="/images/azure.png" alt="Azure" />
          <h3>Azure</h3>
          <p>Cloud services</p>
        </div>

        <div className="integration-card">
          <img src="/images/googlecloude.png" alt="Google Cloud" />
          <h3>Google Cloud</h3>
          <p>Infrastructure</p>
        </div>

        <div className="integration-card">
          <img src="/images/kubernetes.png" alt="Kubernetes" />
          <h3>Kubernetes</h3>
          <p>Container platform</p>
        </div>

        <div className="integration-card">
          <img src="/images/docker.png" alt="Docker" />
          <h3>Docker</h3>
          <p>Application containers</p>
        </div>

        <div className="integration-card">
          <img src="/images/slcak.png" alt="Slack" />
          <h3>Slack</h3>
          <p>Team communication</p>
        </div>

        <div className="integration-card">
          <img src="/images/zira.png" alt="Jira" />
          <h3>Jira</h3>
          <p>Project tracking</p>
        </div>

      </div>

    </section>
  );
}

export default Integrations;