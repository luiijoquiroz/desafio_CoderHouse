import { Link } from "react-router-dom";
import "./MainMenu.scss";

function MainMenu(props) {
  const { itemsMenu = [] } = props;

  return (
    <nav className="MainMenu">
      {itemsMenu.map((item, id) => (
        <Link key={id} className="MainMenu__link" to={item.url}>
          {item.text}
        </Link>
      ))}
    </nav>
  );
}

export { MainMenu };
