import "./CTA.css";

function CTA() {
  return (
    <section className="cta">

      <div className="cta-content">

        <span className="cta-tag">
          Start Today
        </span>

        <h2>
          Manage Security
          <br />
          From One Dashboard
        </h2>

        <p>
          Monitor system activity, review security logs, and keep track
          of important alerts from a single dashboard designed for IT
          and security teams.
        </p>

        <div className="cta-buttons">

          <button className="cta-primary">
            Open Dashboard
          </button>

          <button className="cta-secondary">
            Contact Team
          </button>

        </div>

      </div>

    </section>
  );
}

export default CTA;