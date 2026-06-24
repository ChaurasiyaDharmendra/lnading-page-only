import "./CustomerStory.css";

function CustomerStories() {
  return (
    <section className="stories">
      <div className="stories-container">

        <span className="stories-badge">
          CUSTOMER STORIES
        </span>

        <h2>
          Trusted By Global
          <br />
          Industry Leaders
        </h2>

        <div className="story-card">

          <div className="story-left">
            <p className="quote">
              "Splunk transformed our security operations.
              We reduced incident response time by 72% and
              improved visibility across our entire cloud infrastructure."
            </p>

            <div className="company-info">
              <h3>Sarah Johnson</h3>
              <p>CISO, Global Financial Services</p>
            </div>

            <button className="story-btn">
              Read Full Story →
            </button>
          </div>

          <div className="story-right">

            <div className="metric-card">
              <h3>72%</h3>
              <p>Faster Response</p>
            </div>

            <div className="metric-card">
              <h3>99.9%</h3>
              <p>System Uptime</p>
            </div>

            <div className="metric-card">
              <h3>500+</h3>
              <p>Apps Monitored</p>
            </div>

            <div className="metric-card">
              <h3>24/7</h3>
              <p>Visibility</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CustomerStories;