import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-container">

        <div className="logo">
          <Link to="/" className="logo-link">
            ASLIM
          </Link>
        </div>

        <nav className="nav-links">

          <div className="nav-item">
            <Link to="/platform">Platform</Link>
          </div>

          <div className="nav-item">
            <Link to="/security">Security</Link>
          </div>

          <div className="nav-item">
            <Link to="/observability">Observability</Link>
          </div>

          <div className="nav-item">
            <Link to="/industries">Industries</Link>
          </div>

          <div className="nav-item">
            <Link to="/resources">Resources</Link>
          </div>

          <div className="nav-item">
            <Link to="/support">Support Center</Link>
          </div>

        </nav>

        <div className="nav-actions">

          <Link to="/login" className="login-link">
            Login
          </Link>

          <Link to="/signup" className="signup-btn">
            Sign Up
          </Link>

          <button className="contact-btn">
            Contact Sales
          </button>

        </div>

      </div>

    </header>
  );
}

export default Navbar;