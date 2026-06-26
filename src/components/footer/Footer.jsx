import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">

          <h1>splunk&gt;</h1>

          <p>
            The unified security and observability platform
            helping organizations build digital resilience.
          </p>

        </div>

        <div className="footer-links">

          <div className="footer-box">
            <h3>Company</h3>

            <p>About Splunk</p>
            <p>Careers</p>
            <p>Newsroom</p>
            <p>Partners</p>
            <p>Why Splunk?</p>
          </div>

          <div className="footer-box">
            <h3>Products</h3>

            <p>Free Trials</p>
            <p>Downloads</p>
            <p>Pricing</p>
            <p>Documentation</p>
            <p>Videos</p>
          </div>

          <div className="footer-box">
            <h3>Learn</h3>

            <p>What is SIEM?</p>
            <p>Observability</p>
            <p>Metrics</p>
            <p>Articles</p>
            <p>Training</p>
          </div>

          <div className="footer-box">
            <h3>Contact</h3>

            <p>Contact Sales</p>
            <p>Contact Us</p>
            <p>Support</p>
            <p>Reviews</p>
          </div>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>
          © 2026 Splunk Clone. All Rights Reserved.
        </p>

        <div className="footer-menu">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Cookies</span>
        </div>

      </div>

      <div className="footer-text">

        <p>
          Splunk is a unified security and observability platform designed to
          monitor infrastructure, detect threats and analyze machine data across
          enterprise environments.
        </p>

        <p>
          Information displayed on this website is for educational purposes only.
          This project is created for learning React and frontend development.
        </p>

      </div>

    </footer>
  );
}

export default Footer;