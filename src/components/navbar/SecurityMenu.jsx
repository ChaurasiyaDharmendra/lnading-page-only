import { securityMenu } from "../../data/navbarData";

function SecurityMenu() {
  return (
    <div className="mega-menu">
      {securityMenu.map((section, index) => (
        <div key={index} className="menu-column">
          <h4>{section.title}</h4>

          {section.links.map((link, i) => (
            <a href="/" key={i}>
              {link}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
}

export default SecurityMenu;