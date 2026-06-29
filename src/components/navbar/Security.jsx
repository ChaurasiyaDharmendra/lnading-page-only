import Navbar from "./Navbar";
import "./Security.css";

function Security() {
  return (
    <>
      <Navbar />

      <main className="security-page">

        <section className="security-hero">

          <h1>
            Protect Your Digital
            <br />
            Environment With Confidence
          </h1>

          <p>
            Protect applications, infrastructure and business services through
            continuous monitoring across connected environments.
          </p>

          <p>
            Improve operational visibility, identify unusual activity earlier
            and support faster response using one connected security
            workspace.
          </p>

        </section>

        <hr />

        <section className="security-overview">

          <div className="overview-left">

            <h2>
              Building Strong Security
              Foundations
            </h2>

            <p>
              Every organization generates thousands of operational events
              every day. Bringing those events together provides a better
              understanding of activity across applications, infrastructure
              and cloud environments.
            </p>

            <p>
              A centralized approach helps teams investigate incidents,
              understand security posture and improve response without
              switching between multiple platforms.
            </p>

          </div>

          <div className="overview-right">

            <div className="overview-card">

              <h3>
                Continuous Monitoring
              </h3>

              <p>
                Observe infrastructure, services and connected systems
                continuously while maintaining complete operational
                awareness.
              </p>

            </div>

            <div className="overview-card">

              <h3>
                Threat Awareness
              </h3>

              <p>
                Identify unusual behaviour earlier and support faster
                investigation across business environments.
              </p>

            </div>

          </div>

        </section>

        <hr />

                <section className="security-domains">

          <h2>Core Security Areas</h2>

          <p>
            A connected security platform helps organizations maintain
            visibility across critical systems while supporting reliable
            monitoring and faster operational response.
          </p>

          <div className="domain-grid">

            <div>

              <h3>Network Protection</h3>

              <p>
                Monitor network activity, connected devices and communication
                patterns while maintaining operational visibility across
                business infrastructure.
              </p>

            </div>

            <div>

              <h3>Endpoint Visibility</h3>

              <p>
                Improve awareness across workstations, servers and connected
                endpoints through continuous monitoring and organized
                operational data.
              </p>

            </div>

            <div>

              <h3>Identity Management</h3>

              <p>
                Review authentication activity, user access and operational
                behaviour to better understand security events across
                connected environments.
              </p>

            </div>

            <div>

              <h3>Cloud Operations</h3>

              <p>
                Maintain visibility across cloud resources and digital
                services while supporting consistent operational performance.
              </p>

            </div>

          </div>

        </section>

        <hr />

        <section className="security-workflow">

          <h2>Security Investigation Process</h2>

          <div className="workflow">

            <div>

              <span>01</span>

              <h3>Collect Information</h3>

              <p>
                Gather operational events and security information from
                connected systems into one centralized workspace.
              </p>

            </div>

            <div>

              <span>02</span>

              <h3>Review Activity</h3>

              <p>
                Analyze collected information, identify unusual behaviour and
                understand operational trends across the environment.
              </p>

            </div>

            <div>

              <span>03</span>

              <h3>Respond Faster</h3>

              <p>
                Support quicker investigation, improve collaboration and
                reduce operational impact through informed decision making.
              </p>

            </div>

          </div>

        </section>

        <hr />

        <section className="security-governance">

          <h2>
            Supporting Long-Term
            Security Operations
          </h2>

          <p>
            Consistent monitoring, organized reporting and improved
            operational awareness help organizations strengthen security
            practices while supporting everyday business activities.
          </p>

          <p>
            A connected operational approach improves visibility, simplifies
            collaboration and helps teams adapt to changing security
            requirements with greater confidence.
          </p>

        </section>

      </main>

    </>
  );
}

export default Security;