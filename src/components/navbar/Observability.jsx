import Navbar from "./Navbar";
import "./Observability.css";

function Observability() {
  return (
    <>
      <Navbar />

      <main className="observability-page">

        {/* Hero */}

        <section className="hero-area">

          <h1>
            See Every Service Before
            <br />
            Problems Become Incidents
          </h1>

          <p>
            Bring operational information together to understand system
            behaviour, application performance and infrastructure health from
            one connected experience.
          </p>

        </section>

        {/* Intro */}

        <section className="intro-layout">

          <div>
            <h2>Connected Operational Data</h2>

            <p>
              Teams rely on different sources of information every day.
              Bringing those sources together helps reduce investigation time
              and improves confidence when responding to production issues.
            </p>
          </div>

          <aside>
            <h3>Daily Benefits</h3>

            <p>✔ Faster troubleshooting</p>
            <p>✔ Better service visibility</p>
            <p>✔ Simplified monitoring</p>
            <p>✔ Consistent reporting</p>

          </aside>

        </section>

        {/* Feature Blocks */}

        <section className="feature-area">

          <article>
            <h3>Application Health</h3>
            <p>
              Review response time, service availability and application
              behaviour from one location.
            </p>
          </article>

          <article>
            <h3>Infrastructure Status</h3>
            <p>
              Follow resource usage and infrastructure performance across
              connected environments.
            </p>
          </article>

          <article>
            <h3>Operational Trends</h3>
            <p>
              Compare recent activity with historical behaviour to identify
              unusual patterns.
            </p>
          </article>

          <article>
            <h3>Performance Reviews</h3>
            <p>
              Share operational findings through organized reports and
              meaningful summaries.
            </p>
          </article>

        </section>

        {/* Quote */}

        <section className="statement-box">

          <h2>Reliable decisions begin with reliable visibility.</h2>

          <p>
            Understanding every part of the environment helps teams maintain
            stability, improve performance and reduce operational uncertainty.
          </p>

        </section>

      </main>

    </>
  );
}

export default Observability;