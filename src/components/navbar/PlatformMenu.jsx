import { platformMenu } from "../../data/navbarData";

function PlatformMenu() {
  return (
    <div className="mega-menu">
      {platformMenu.map((section, index) => (
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

export default PlatformMenu;