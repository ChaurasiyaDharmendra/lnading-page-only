import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">

      <div className="navbar-container">

        <div className="logo">
          ASLIM
        </div>

        <nav className="nav-links">

          <div className="nav-item">
            <span>Platform</span>
          </div>

          <div className="nav-item">
            <span>Security</span>
          </div>

          <div className="nav-item">
            <span>Observability</span>
          </div>

          <div className="nav-item">
            <span>Industries</span>
          </div>

          <div className="nav-item">
            <span>Resources</span>
          </div>

          <div className="nav-item">
            <span>Support</span>
          </div>

          
          <div className="nav-item">
            <Link to="/signup">Sign Up</Link>
          </div>

          <div className="nav-item">
            <Link to="/login">Login</Link>
          </div>

        </nav>

        <button className="contact-btn">
          Contact Sales
        </button>

      </div>

    </header>
  );
}

export default Navbar;