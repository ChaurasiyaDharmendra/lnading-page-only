import Navbar from "./Navbar";
import "./Industries.css";

function Industries() {
  return (
    <>
      <Navbar />

      <main className="industries-page">

        <section className="industries-hero">

          <h1>
            Solutions Designed For
            <br />
            Different Industries
          </h1>

          <p>
            Every industry faces unique operational challenges. A connected
            platform helps organizations improve visibility, simplify daily
            operations and support better business decisions across changing
            technology environments.
          </p>

        </section>

        <hr />

        <section className="industry-layout">

          <div className="industry-box">

            <h2>Financial Services</h2>

            <p>
              Monitor digital banking platforms, payment services and customer
              transactions with improved operational visibility and reliable
              performance monitoring.
            </p>

          </div>

          <div className="industry-box">

            <h2>Healthcare</h2>

            <p>
              Support healthcare systems with dependable application
              monitoring, infrastructure awareness and continuous service
              availability.
            </p>

          </div>

        </section>

        <hr />

        <section className="industry-list">

          <div>

            <h3>Retail</h3>

            <p>
              Improve customer experience by monitoring applications,
              infrastructure and business services during seasonal demand.
            </p>

          </div>

          <div>

            <h3>Manufacturing</h3>

            <p>
              Track connected production systems, improve operational
              stability and reduce unexpected service interruptions.
            </p>

          </div>

          <div>

            <h3>Technology</h3>

            <p>
              Maintain software performance, review operational health and
              improve service reliability throughout development cycles.
            </p>

          </div>

        </section>

        <hr />

        <section className="industry-highlight">

          <h2>
            Supporting Organizations
            Through Every Stage Of Growth
          </h2>

          <p>
            Business environments continue to evolve through cloud adoption,
            digital transformation and connected infrastructure. A unified
            operational platform helps teams stay informed while improving
            efficiency across everyday business activities.
          </p>

        </section>

        <hr />

        <section className="industry-bottom">

          <div>

            <h3>Scalable Operations</h3>

            <p>
              Expand operational monitoring as business requirements continue
              to grow without increasing unnecessary complexity.
            </p>

          </div>

          <div>

            <h3>Reliable Performance</h3>

            <p>
              Maintain consistent service quality through continuous
              monitoring and meaningful operational insights.
            </p>

          </div>

          <div>

            <h3>Business Continuity</h3>

            <p>
              Reduce operational risks while helping teams make informed
              decisions with greater confidence every day.
            </p>

          </div>

        </section>

      </main>
    </>
  );
}

export default Industries;