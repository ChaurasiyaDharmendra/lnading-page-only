
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">

          <span className="footer-tag">
            OBSERVABILITY PLATFORM
          </span>

          <h1>ASLIM</h1>

          <p>
            A unified platform for monitoring applications,
            infrastructure and system performance from one place.
          </p>

        </div>

        <div className="footer-links">

          <div className="footer-box">

            <h3>Platform</h3>

            <p>Overview</p>
            <p>Observability</p>
            <p>Security</p>
            <p>Analytics</p>
            <p>AI Insights</p>

          </div>

          <div className="footer-box">

            <h3>Solutions</h3>

            <p>Cloud Monitoring</p>
            <p>Infrastructure</p>
            <p>Log Analytics</p>
            <p>Incident Management</p>
            <p>Performance Tracking</p>

          </div>

          <div className="footer-box">

            <h3>Resources</h3>

            <p>Documentation</p>
            <p>User Guide</p>
            <p>Developer API</p>
            <p>Knowledge Base</p>
            <p>Support</p>

          </div>

          <div className="footer-box">

            <h3>Company</h3>

            <p>About Us</p>
            <p>Careers</p>
            <p>Partners</p>
            <p>Contact</p>
            <p>Help Center</p>

          </div>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>
          © 2026 ASLIM. All Rights Reserved.
        </p>

        <div className="footer-menu">

          <span>Privacy</span>
          <span>Terms</span>
          <span>Cookies</span>

        </div>

      </div>

      <div className="footer-text">

        <p>
          ASLIM helps teams monitor applications,
          infrastructure and cloud environments through
          one unified observability platform.
        </p>

        <p>
          Designed to improve visibility, simplify monitoring
          and support reliable day-to-day IT operations.
        </p>

      </div>

    </footer>
  );
}

export default Footer;

