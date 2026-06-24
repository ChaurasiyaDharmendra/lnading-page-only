import "./FeatureCards.css";
import {
  FaShieldAlt,
  FaChartLine,
  FaCloud,
  FaRobot,
} from "react-icons/fa";

function FeatureCards() {
  const features = [
    {
      icon: <FaShieldAlt />,
      title: "Security Monitoring",
      description:
        "Detect, investigate and respond to threats faster with AI-powered security analytics.",
    },
    {
      icon: <FaChartLine />,
      title: "Observability",
      description:
        "Monitor infrastructure, applications and logs in real time across your ecosystem.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Analytics",
      description:
        "Gain complete visibility into multi-cloud environments and workloads.",
    },
    {
      icon: <FaRobot />,
      title: "AI Automation",
      description:
        "Automate workflows, incident response and operational tasks using AI.",
    },
  ];

  return (
    <section className="feature-section">

      <div className="feature-header">
        <span className="feature-badge">
          PLATFORM CAPABILITIES
        </span>

        <h2>
          Everything You Need To Secure,
          Monitor And Scale
        </h2>

        <p>
          One unified platform for security,
          observability and AI-powered operations.
        </p>
      </div>

      <div className="feature-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <button>
              Learn More →
            </button>
          </div>
        ))}
      </div>

    </section>
  );
}

export default FeatureCards;