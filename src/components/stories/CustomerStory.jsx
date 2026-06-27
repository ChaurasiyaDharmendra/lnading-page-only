import "./CustomerStory.css";

function CustomerStories() {
  return (
    <section className="stories">

      <h2>Trusted by Teams Across Different Industries</h2>

      <div className="story-box">

        <div className="story-text">

          <p>
            "This platform has made it easier for our team to monitor
            applications, track system performance, and respond to
            issues quickly. Having everything in one place has improved
            our daily operations and reduced downtime."
          </p>

          <h3>Dharmendra Chaurasiya</h3>

          <span>Head of IT Operations</span>

          <br />
          <br />

          <button>Read Case Study</button>

        </div>

        <div className="story-data">

          <div className="box">
            <h3>72%</h3>
            <p>Faster Issue Resolution</p>
          </div>

          <div className="box">
            <h3>99.9%</h3>
            <p>Service Availability</p>
          </div>

          <div className="box">
            <h3>500+</h3>
            <p>Systems Monitored</p>
          </div>

          <div className="box">
            <h3>24/7</h3>
            <p>Platform Monitoring</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default CustomerStories;