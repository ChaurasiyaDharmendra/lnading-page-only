import "./Reviews.css";

function Reviews() {
  return (
    <section className="reviews">

      <span className="reviews-tag">
        User Feedback
      </span>

      <h2>
        Feedback From
        Our Users
      </h2>

      <p>
        See how different teams use ASLIM to monitor systems,
        manage alerts, and improve day-to-day operations.
      </p>

      <div className="reviews-row">

        <div className="review-card">

          <h3>★★★★★</h3>

          <p>
            "The dashboard is easy to understand and helps us
            monitor system logs without switching between
            multiple tools."
          </p>

          <h4>Dharmendra Chaurasiya</h4>

          <span>
            System Administrator
          </span>

        </div>

        <div className="review-card">

          <h3>★★★★★</h3>

          <p>
            "We can review alerts and monitor cloud resources
            from one place, which saves time every day."
          </p>

          <h4>Neha Sharma</h4>

          <span>
            Cloud Engineer
          </span>

        </div>

        <div className="review-card">

          <h3>★★★★★</h3>

          <p>
            "The interface is clean, responsive, and simple to
            use for monitoring applications and servers."
          </p>

          <h4>Rahul Mehta</h4>

          <span>
            IT Support Engineer
          </span>

        </div>

      </div>

    </section>
  );
}

export default Reviews;