import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">

          <span className="footer-tag">
            Security Dashboard
          </span>

          <h1>ASLIM</h1>

          <p>
            Monitor security events, system logs, and infrastructure
            from one dashboard.
          </p>

        </div>

        <div className="footer-links">

          <div className="footer-box">

            <h3>Platform</h3>

            <p>Dashboard</p>
            <p>Security</p>
            <p>Analytics</p>
            <p>Monitoring</p>

          </div>

          <div className="footer-box">

            <h3>Services</h3>

            <p>Cloud</p>
            <p>Infrastructure</p>
            <p>Logs</p>
            <p>Incidents</p>

          </div>

          <div className="footer-box">

            <h3>Resources</h3>

            <p>Documentation</p>
            <p>Guides</p>
            <p>API</p>
            <p>Support</p>

          </div>

          <div className="footer-box">

            <h3>Company</h3>

            <p>About</p>
            <p>Careers</p>
            <p>Contact</p>
            <p>Help</p>

          </div>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>
          © 2026 ASLIM. All rights reserved.
        </p>

        <div className="footer-menu">

          <span>Privacy</span>
          <span>Terms</span>
          <span>Cookies</span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;