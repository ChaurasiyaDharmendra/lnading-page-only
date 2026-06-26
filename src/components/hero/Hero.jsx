import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-tag">
          Unified Security & Observability Platform
        </span>

        <h1>
          Complete data.
          <br />
           <span style={{ color: "orange" }}>
          AI you can trust.
           </span>
        </h1>

        <p>
          Security and observability at enterprise scale.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Request a demo
          </button>

        </div>

      </div>

      <div className="hero-right">

        <img
          src="/images/hero-dashboard.png"
          alt="Dashboard"
          className="hero-dashboard"
        />

      </div>

    </section>
  );
}

export default Hero;