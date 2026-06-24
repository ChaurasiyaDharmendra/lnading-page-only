import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-brand">
            <h2>splunk&gt;</h2>
            <p>
              The unified security and observability platform
              helping organizations build digital resilience.
            </p>
          </div>

          <div className="footer-links">

            <div className="footer-column">
              <h4>Platform</h4>
              <a href="/">Security</a>
              <a href="/">Observability</a>
              <a href="/">AI Operations</a>
              <a href="/">Cloud</a>
            </div>

            <div className="footer-column">
              <h4>Solutions</h4>
              <a href="/">Enterprise</a>
              <a href="/">Government</a>
              <a href="/">Financial</a>
              <a href="/">Healthcare</a>
            </div>

            <div className="footer-column">
              <h4>Resources</h4>
              <a href="/">Documentation</a>
              <a href="/">Blogs</a>
              <a href="/">Case Studies</a>
              <a href="/">Support</a>
            </div>

            <div className="footer-column">
              <h4>Company</h4>
              <a href="/">About</a>
              <a href="/">Careers</a>
              <a href="/">Contact</a>
              <a href="/">Partners</a>
            </div>

          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © 2026 Splunk Clone. All Rights Reserved.
          </p>

          <div className="footer-bottom-links">
            <a href="/">Privacy</a>
            <a href="/">Terms</a>
            <a href="/">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;