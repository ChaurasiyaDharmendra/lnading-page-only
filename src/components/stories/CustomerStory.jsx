import "./CustomerStory.css";

function CustomerStories() {
  return (
    <section className="stories">

      <span className="story-tag">
        Customer Story
      </span>

      <h2>
        Helping Teams Improve
        <br />
        Security Monitoring
      </h2>

      <div className="story-box">

        <div className="story-text">

          <p>
            "After using this dashboard, our team can check system logs,
            monitor alerts, and review important events from one place.
            This has simplified our daily monitoring process and helped
            us respond to incidents more quickly."
          </p>

          <h3>Dharmendra Chaurasiya </h3>

          <span>IT Operations Manager</span>

          <br />
          <br />

          <button className="story-btn">
            View Case Study
          </button>

        </div>

        <div className="story-data">

          <div className="box">
            <h3>72%</h3>
            <p>Issue Resolution Time</p>
          </div>

          <div className="box">
            <h3>99.9%</h3>
            <p>System Availability</p>
          </div>

          <div className="box">
            <h3>500+</h3>
            <p>Connected Devices</p>
          </div>

          <div className="box">
            <h3>24/7</h3>
            <p>Security Monitoring</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default CustomerStories;