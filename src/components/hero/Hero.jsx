import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-tag">
          Unified Security & Observability Platform
        </span>

        <h1>
          Turn Machine Data
          <br />
          <span style={{ color: "#ff9800" }}>
            Into Actionable Insights.
          </span>
        </h1>

        <p>
          Monitor infrastructure, analyze logs, detect anomalies, and gain
          real-time visibility across your entire environment from one platform.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Explore Platform
          </button>
        </div>

      </div>

      <div className="hero-right">

        <img
          src="/images/hero.png"
          alt="Observability Platform"
          className="hero-dashboard"
        />

      </div>

    </section>
  );
}

export default Hero;