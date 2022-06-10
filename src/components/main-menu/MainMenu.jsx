import { Link } from "react-router-dom";
import "./MainMenu.scss";

function MainMenu({ itemsMenu }) {

  return (
    <div className="menu">
      <ul className="ul">
        {itemsMenu.map((item) => (
          <li  key={item.text} className="li">
            <Link key={item.text} className="a" to={item.url}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { MainMenu };
