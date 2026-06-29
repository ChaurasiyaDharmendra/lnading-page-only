import Navbar from "./Navbar";
import "./Platform.css";

const Platform = () => {
  return (
    <>
      <Navbar />

      <main className="platform-page">

        <section className="hero-section">

          <h1>
            One Workspace For
            <br />
            Modern IT Operations
          </h1>

          <p>
            Bring infrastructure, applications and operational information
            together through a single platform that helps organizations improve
            visibility across every connected environment.
          </p>

          <p>
            Monitor performance, understand operational health and make better
            business decisions without switching between multiple monitoring
            tools every day.
          </p>

        </section>

        <hr />

        <section className="overview-section">

          <div className="overview-left">

            <h2>Everything Working Together</h2>

            <p>
              Modern organizations depend on cloud services, applications,
              infrastructure and business systems that continuously generate
              operational information. Managing them separately often slows
              investigation and increases operational complexity.
            </p>

            <p>
              A unified platform provides one connected workspace where teams
              can understand overall system health, identify issues faster and
              maintain visibility across changing environments.
            </p>

          </div>

          <div className="overview-right">

            <h3>Key Advantages</h3>

            <p>Monitor infrastructure from one location.</p>

            <p>Review application performance continuously.</p>

            <p>Understand operational trends over time.</p>

            <p>Support faster collaboration across teams.</p>

            <p>Improve visibility through centralized monitoring.</p>

          </div>

        </section>

        <hr />

        <section className="platform-section">

          <h2>Core Platform Areas</h2>

          <p>
            The platform combines essential operational capabilities into one
            workspace, allowing organizations to manage infrastructure,
            applications and operational analytics more efficiently.
          </p>

          <div className="platform-grid">

            <div>

              <h3>Infrastructure Monitoring</h3>

              <p>
                Track servers, cloud resources and connected systems while
                maintaining complete operational awareness across the entire
                environment.
              </p>

            </div>

            <div>

              <h3>Application Visibility</h3>

              <p>
                Understand application behaviour, response time and service
                reliability using meaningful operational information collected
                from different environments.
              </p>

            </div>

            <div>

              <h3>Operational Analytics</h3>

              <p>
                Review trends, compare historical information and support
                informed business decisions through organized operational
                insights.
              </p>

            </div>

          </div>

        </section>

        <hr />

                <section className="capability-section bg-light">

          <h2>Platform Capabilities</h2>

          <p>
            Daily operations require continuous monitoring, organized reporting
            and complete visibility across every connected environment. The
            platform combines these capabilities into one connected workspace.
          </p>

          <div className="capability-row">

            <div>

              <h3>Centralized Monitoring</h3>

              <p>
                Bring operational information together so teams can monitor
                infrastructure, applications and connected services without
                switching between multiple dashboards.
              </p>

            </div>

            <div>

              <h3>Operational Reporting</h3>

              <p>
                Generate meaningful reports, compare historical information and
                understand performance through organized operational data.
              </p>

            </div>

          </div>

          <div className="capability-row">

            <div>

              <h3>Performance Visibility</h3>

              <p>
                Review infrastructure health, application behaviour and overall
                service performance from one operational workspace.
              </p>

            </div>

            <div>

              <h3>Business Insights</h3>

              <p>
                Transform operational information into practical insights that
                support planning, optimization and long-term improvement.
              </p>

            </div>

          </div>

        </section>

        <hr />

        <section className="growth-section">

          <h2>Built To Support Growing Organizations</h2>

          <p>
            As business operations expand, organizations require greater
            visibility across applications, cloud services and infrastructure.
            A connected platform helps teams maintain operational consistency
            while adapting to changing business requirements.
          </p>

          <p>
            From everyday monitoring to long-term operational planning, the
            platform provides a reliable foundation for improving efficiency
            and maintaining service quality across the organization.
          </p>

        </section>

        <hr />

        <section className="closing-section">

          <h2>Better Visibility Creates Better Decisions</h2>

          <p>
            When operational information is available through one connected
            workspace, teams spend less time searching for data and more time
            improving system performance, collaboration and business outcomes.
          </p>

        </section>

      </main>

    </>
  );
};

export default Platform;