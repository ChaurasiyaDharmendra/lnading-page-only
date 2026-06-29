import Navbar from "./Navbar";
import "./Support.css";

function Support() {
  return (
    <>
      <Navbar />

      <main className="support-page">

        <section className="support-hero">

          <h1>
            Helping Teams Stay
            <br />
            Productive Every Day
          </h1>

          <p>
            Access support resources, find answers to common questions and
            connect with the right information to keep operations running
            smoothly.
          </p>

        </section>

        <hr />

        <section className="support-intro">

          <div>
            <h2>Help Center</h2>

            <p>
              Browse practical information, setup guidance and operational
              resources designed to solve common issues quickly.
            </p>
          </div>

          <div>
            <h2>Technical Assistance</h2>

            <p>
              Find troubleshooting guidance and recommendations for resolving
              day-to-day platform challenges.
            </p>
          </div>

        </section>

        <hr />

        <section className="support-faq">

          <div>
            <h3>How do I get started?</h3>
            <p>
              Follow the setup documentation and configure the platform using
              the recommended deployment steps.
            </p>
          </div>

          <div>
            <h3>Where can I find updates?</h3>
            <p>
              Product updates and documentation are available through the
              official knowledge resources.
            </p>
          </div>

          <div>
            <h3>Need additional guidance?</h3>
            <p>
              Review implementation examples and operational best practices for
              common deployment scenarios.
            </p>
          </div>

        </section>

        <hr />

        <section className="support-contact">

          <h2>Contact Our Team</h2>

          <p>
            Our support team is available to help with product questions,
            technical guidance and operational assistance whenever required.
          </p>

        </section>

      </main>
    </>
  );
}

export default Support;