import "./Integrations.css";

import {
  FaGithub,
  FaDocker,
  FaSlack,
  FaMicrosoft,
  FaCloud,
} from "react-icons/fa";

function Integrations() {
  const integrations = [
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaCloud />, name: "AWS" },
    { icon: <FaMicrosoft />, name: "Azure" },
    { icon: <FaCloud />, name: "Google Cloud" },
    { icon: <FaCloud />, name: "Kubernetes" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <FaSlack />, name: "Slack" },
    { icon: <FaCloud />, name: "Jira" },
  ];

  return (
    <section className="integrations">
      <div className="integrations-container">
        <span className="integrations-badge">
          INTEGRATIONS
        </span>

        <h2>
          Connect Your Entire
          <br />
          Technology Stack
        </h2>

        <p>
          Integrate seamlessly with cloud providers,
          DevOps tools, collaboration platforms and
          enterprise applications.
        </p>

        <div className="integration-grid">
          {integrations.map((item, index) => (
            <div className="integration-card" key={index}>
              <div className="integration-icon">
                {item.icon}
              </div>

              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Integrations;