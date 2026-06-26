import "./CustomerStory.css";

function CustomerStories() {

  return (
    <section className="stories">

      <h2>Trusted By Global Industry Leaders</h2>

      <div className="story-box">

        <div className="story-text">

          <p>
            "Splunk helped our team improve security monitoring,
            reduce response time and gain better visibility across
            our cloud infrastructure."
          </p>

          <h3>Sarah Johnson</h3>

          <span>CISO, Global Financial Services</span>

          <br />
          <br />

          <button>Read Full Story</button>

        </div>

        <div className="story-data">

          <div className="box">
            <h3>72%</h3>
            <p>Faster Response</p>
          </div>

          <div className="box">
            <h3>99.9%</h3>
            <p>System Uptime</p>
          </div>

          <div className="box">
            <h3>500+</h3>
            <p>Apps Monitored</p>
          </div>

          <div className="box">
            <h3>24/7</h3>
            <p>Visibility</p>
          </div>

        </div>

      </div>

    </section>
  );

}

export default CustomerStories;