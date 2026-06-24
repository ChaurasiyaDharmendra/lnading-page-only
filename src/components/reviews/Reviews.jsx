import "./Reviews.css";

function Reviews() {
  const reviews = [
    {
      name: "Michael Carter",
      role: "Security Director",
      company: "Global Tech",
      text: "Splunk helped us reduce incident response times dramatically. The visibility across our infrastructure is unmatched.",
    },
    {
      name: "Sarah Williams",
      role: "Cloud Architect",
      company: "FinServe",
      text: "The AI-powered analytics helped our team identify critical issues before they impacted customers.",
    },
    {
      name: "David Johnson",
      role: "SOC Manager",
      company: "Enterprise Corp",
      text: "A single platform for security and observability has simplified our operations and improved efficiency.",
    },
  ];

  return (
    <section className="reviews">
      <div className="reviews-container">

        <span className="reviews-badge">
          CUSTOMER REVIEWS
        </span>

        <h2>
          What Customers
          <br />
          Are Saying
        </h2>

        <p className="reviews-subtitle">
          Trusted by organizations worldwide to deliver
          security, observability and operational excellence.
        </p>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>

              <div className="stars">
                ★★★★★
              </div>

              <p className="review-text">
                "{review.text}"
              </p>

              <div className="review-user">
                <div className="avatar">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h4>{review.name}</h4>
                  <span>
                    {review.role} • {review.company}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Reviews;