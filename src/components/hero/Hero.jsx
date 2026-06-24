import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <span className="hero-tag">
          Unified Security & Observability Platform
        </span>

        <h1>
          Build A Digital
          <br />
          Resilience Strategy
          <br />
          Powered By AI
        </h1>

        <p>
          Detect threats faster, monitor infrastructure,
          analyze logs and secure your business with one
          unified platform.
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            Start Free Trial
          </button>

          <button className="secondary-btn">
            Watch Demo
          </button>

        </div>

      </div>

      <div className="hero-right">

        <div className="dashboard-wrapper">

          <div className="top-cards">

            <div className="metric-card">

              <h4>Success rate SLO (7d)</h4>

              <div className="metric-box">
                <span className="alert">!</span>

                <div>
                  <h2>20.003%</h2>
                  <p>SLO: 40%</p>
                </div>
              </div>

              <div className="metric-footer">
                <span>0.0% Budget Left</span>
                <span>1.33 Budget Left</span>
              </div>

            </div>

            <div className="service-card">

              <h4>Service map</h4>

              <div className="service-line">

                <div className="dot"></div>

                <div className="line"></div>

                <div className="dot active"></div>

                <div className="line"></div>

                <div className="dot"></div>

              </div>

            </div>

          </div>

          <div className="chart-card">

            <h4>Success rate SLI</h4>

            <div className="chart">

              {Array.from({ length: 40 }).map((_, index) => (
                <div
                  key={index}
                  className="bar"
                  style={{
                    height: `${20 + Math.random() * 90}px`,
                  }}
                ></div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;