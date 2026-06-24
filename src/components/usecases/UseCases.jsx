import "./UseCases.css";

function UseCases() {
  const cases = [
    {
      title: "Security Operations",
      desc: "Detect, investigate and respond to threats faster with AI-powered analytics.",
      stat: "72%",
    },
    {
      title: "Observability",
      desc: "Monitor applications, infrastructure and logs from a single platform.",
      stat: "99.9%",
    },
    {
      title: "Cloud Monitoring",
      desc: "Gain complete visibility across multi-cloud environments and services.",
      stat: "500+",
    },
    {
      title: "AI Automation",
      desc: "Automate repetitive workflows and improve operational efficiency.",
      stat: "24/7",
    },
  ];

  return (
    <section className="usecases">
      <div className="usecases-container">

        <span className="usecases-badge">
          USE CASES
        </span>

        <h2>
          Solve Your Most Critical
          <br />
          Business Challenges
        </h2>

        <p className="usecases-subtitle">
          Explore how organizations use Splunk to improve
          security, observability and digital resilience.
        </p>

        <div className="usecases-grid">
          {cases.map((item, index) => (
            <div className="usecase-card" key={index}>

              <div className="usecase-stat">
                {item.stat}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <a href="/">
                Learn More →
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default UseCases;