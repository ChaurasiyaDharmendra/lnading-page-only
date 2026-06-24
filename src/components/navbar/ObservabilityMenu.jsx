import { observabilityMenu } from "../../data/navbarData";

function ObservabilityMenu() {
  return (
    <div className="mega-menu">
      {observabilityMenu.map((section, index) => (
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

export default ObservabilityMenu;