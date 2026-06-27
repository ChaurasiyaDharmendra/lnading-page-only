
import "./Reviews.css";

function Reviews() {
  return (
    <section className="reviews">

      <h2>
        What Our
        <br />
        Customers Say
      </h2>

      <p>
        See how businesses use our platform to improve system
        monitoring, security, and overall performance.
      </p>

      <div className="reviews-row">

        <div className="review-card">

          <h3>★★★★★</h3>

          <p>
            "Our team can now monitor applications and system
            performance from one place. It has made daily
            operations much easier."
          </p>

          <h4>Dharmendra Chaurasiya</h4>

          <span>
            Head of IT Operations
          </span>

        </div>

        <div className="review-card">

          <h3>★★★★★</h3>

          <p>
            "The platform helps us identify issues early and
            keeps our cloud services running smoothly without
            unnecessary downtime."
          </p>

          <h4>Neha Sharma</h4>

          <span>
            Cloud Operations Lead
          </span>

        </div>

        <div className="review-card">

          <h3>★★★★★</h3>

          <p>
            "The dashboard is simple to use and gives our team
            complete visibility of applications, infrastructure
            and system health."
          </p>

          <h4>Rahul Mehta</h4>

          <span>
            Infrastructure Manager
          </span>

        </div>

      </div>

    </section>
  );
}

export default Reviews;

