import { industriesMenu } from "../../data/navbarData";

function IndustriesMenu() {
  return (
    <div className="mega-menu">
      {industriesMenu.map((section, index) => (
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

export default IndustriesMenu;