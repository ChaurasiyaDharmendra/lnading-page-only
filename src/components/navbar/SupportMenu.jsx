import { supportMenu } from "../../data/navbarData";

function SupportMenu() {
  return (
    <div className="mega-menu">
      {supportMenu.map((section, index) => (
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

export default SupportMenu;