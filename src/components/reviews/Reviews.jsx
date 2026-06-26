import "./Reviews.css";

function Reviews() {
  return (
    <section className="reviews">

      <h2>
        What Customers
        <br />
        Are Saying
      </h2>

      <p>
        Trusted by organizations worldwide to deliver security,
        observability and operational excellence.
      </p>

      <div className="reviews-row">

        <div className="review-card">

          <h3>★★★★★</h3>

          <p>
            "Splunk helped us reduce incident response times
            dramatically. The visibility across our infrastructure
            is unmatched."
          </p>

          <h4>Michael Carter</h4>

          <span>
            Security Director • Global Tech
          </span>

        </div>

        <div className="review-card">

          <h3>★★★★★</h3>

          <p>
            "The AI-powered analytics helped our team identify
            critical issues before they impacted customers."
          </p>

          <h4>Sarah Williams</h4>

          <span>
            Cloud Architect • FinServe
          </span>

        </div>

        <div className="review-card">

          <h3>★★★★★</h3>

          <p>
            "A single platform for security and observability
            has simplified our operations and improved efficiency."
          </p>

          <h4>David Johnson</h4>

          <span>
            SOC Manager • Enterprise Corp
          </span>

        </div>

      </div>

    </section>
  );
}

export default Reviews;