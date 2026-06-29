import Navbar from "./Navbar";
import "./Resources.css";

function Resources() {
  return (
    <>
      <Navbar />

      <main className="resources-page">

        <section className="resources-hero">

          <h1>
            Resources To Help
            <br />
            Your Team Learn
          </h1>

          <p>
            Explore practical documentation, implementation guidance and
            operational knowledge designed to support everyday workflows and
            continuous improvement.
          </p>

        </section>

        <hr />

        <section className="resources-intro">

          <h2>Everything In One Place</h2>

          <p>
            Find technical information, best practices and useful references
            that help teams understand the platform and improve operational
            efficiency.
          </p>

        </section>

        <hr />

        <section className="resources-grid">

          <div>

            <h3>Documentation</h3>

            <p>
              Learn platform features, deployment steps and configuration
              guidance through organized documentation.
            </p>

          </div>

          <div>

            <h3>Implementation Guides</h3>

            <p>
              Follow practical examples that simplify deployment and daily
              platform management.
            </p>

          </div>

        </section>

        <hr />

        <section className="resources-list">

          <div>

            <h3>Best Practices</h3>

            <p>
              Improve operational consistency through recommended workflows.
            </p>

          </div>

          <div>

            <h3>Knowledge Articles</h3>

            <p>
              Discover useful information collected from common operational
              scenarios.
            </p>

          </div>

          <div>

            <h3>Tutorials</h3>

            <p>
              Step-by-step learning material for everyday platform tasks.
            </p>

          </div>

        </section>

        <hr />

        <section className="resources-bottom">

          <h2>Keep Learning</h2>

          <p>
            Continuous learning helps organizations improve system
            reliability, strengthen operational knowledge and support better
            decision making across every stage of growth.
          </p>

        </section>

      </main>
    </>
  );
}

export default Resources;