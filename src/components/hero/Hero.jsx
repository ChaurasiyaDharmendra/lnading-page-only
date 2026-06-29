import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-tag">
          SOC Monitoring Platform
        </span>

        <h1>
          Secure Every System
          <br />
          <span className="hero-highlight">
            From One Dashboard
          </span>
        </h1>

        <p>
          Monitor security events, review system logs, and track important
          activities from a single dashboard. Stay informed with live updates
          and quickly respond to potential threats.
        </p>

        <p className="hero-note">
          Built for security teams, IT administrators, and modern organizations.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Open Dashboard
          </button>
        </div>

      </div>

      <div className="hero-right">

        <img
          src="/images/hero.png"
          alt="SOC Dashboard Preview"
          className="hero-dashboard"
        />

      </div>

    </section>
  );
}

export default Hero;