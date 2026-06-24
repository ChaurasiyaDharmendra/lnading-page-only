import "./Journey.css";

function Journey() {
  const steps = [
    {
      number: "01",
      title: "Collect Data",
      desc: "Ingest logs, metrics, traces and events from every source.",
    },
    {
      number: "02",
      title: "Analyze",
      desc: "Use AI-powered analytics to detect patterns and anomalies.",
    },
    {
      number: "03",
      title: "Respond",
      desc: "Automate workflows and accelerate incident resolution.",
    },
    {
      number: "04",
      title: "Optimize",
      desc: "Continuously improve security and operational performance.",
    },
  ];

  return (
    <section className="journey">
      <div className="journey-container">

        <span className="journey-badge">
          PLATFORM JOURNEY
        </span>

        <h2>
          From Data To
          <br />
          Actionable Insights
        </h2>

        <p className="journey-subtitle">
          Transform raw machine data into business outcomes
          with a unified security and observability platform.
        </p>

        <div className="journey-timeline">
          {steps.map((step, index) => (
            <div className="journey-card" key={index}>
              <div className="journey-number">
                {step.number}
              </div>

              <h3>{step.title}</h3>

              <p>{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Journey;