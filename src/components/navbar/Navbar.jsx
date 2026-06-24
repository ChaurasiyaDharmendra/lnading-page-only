import { useState } from "react";
import "./Navbar.css";
import "./MegaMenu.css";

import PlatformMenu from "./PlatformMenu";
import SecurityMenu from "./SecurityMenu";
import ObservabilityMenu from "./ObservabilityMenu";
import IndustriesMenu from "./IndustriesMenu";
import ResourcesMenu from "./ResourcesMenu";
import SupportMenu from "./SupportMenu";
import LoginMenu from "./LoginMenu";

function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <header className="navbar">
      <div className="navbar-container">

        <div className="logo">
          splunk&gt;
        </div>

        <nav className="nav-links">

          <div
            className="nav-item"
            onMouseEnter={() => setActiveMenu("platform")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <span>Platform</span>
            {activeMenu === "platform" && <PlatformMenu />}
          </div>

          <div
            className="nav-item"
            onMouseEnter={() => setActiveMenu("security")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <span>Security</span>
            {activeMenu === "security" && <SecurityMenu />}
          </div>

          <div
            className="nav-item"
            onMouseEnter={() => setActiveMenu("observability")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <span>Observability</span>
            {activeMenu === "observability" && <ObservabilityMenu />}
          </div>

          <div
            className="nav-item"
            onMouseEnter={() => setActiveMenu("industries")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <span>Industries</span>
            {activeMenu === "industries" && <IndustriesMenu />}
          </div>

          <div
            className="nav-item"
            onMouseEnter={() => setActiveMenu("resources")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <span>Resources</span>
            {activeMenu === "resources" && <ResourcesMenu />}
          </div>

          <div
            className="nav-item"
            onMouseEnter={() => setActiveMenu("support")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <span>Support</span>
            {activeMenu === "support" && <SupportMenu />}
          </div>

          <div
            className="nav-item"
            onMouseEnter={() => setActiveMenu("login")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <span>Login</span>
            {activeMenu === "login" && <LoginMenu />}
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