import "./Integrations.css";

function Integrations() {

  const integrations = [
    { image: "/images/github.png", name: "GitHub" },
    { image: "/images/aws.png", name: "AWS" },
    { image: "/images/azure.png", name: "Azure" },
    { image: "/images/googlecloude.png", name: "Google Cloud" },
    { image: "/images/kubernetes.png", name: "Kubernetes" },
    { image: "/images/docker.png", name: "Docker" },
    { image: "/images/slcak.png", name: "Slack" },
    { image: "/images/zira.png", name: "Jira" },
  ];

  return (
    <section className="integrations">

      <h2>Connect Your Entire Technology Stack</h2>

      <p>
        Integrate seamlessly with cloud providers, DevOps tools,
        collaboration platforms and enterprise applications.
      </p>

      <div className="integration-grid">

        {integrations.map((item, index) => (
          <div className="integration-card" key={index}>

            <img
              src={item.image}
              alt={item.name}
              className="integration-image"
            />

            <h3>{item.name}</h3>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Integrations;