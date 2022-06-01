import { Link } from "react-router-dom";
import "./Header.scss";

import { MainMenu } from "../";
function Header() {
  const itemsMenu = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Quienes somos",
      url: "/quienes-somos",
    },
    {
      text: "Nosotros",
      url: "/nosotros",
    },
    {
      text: "Servicios",
      url: "/servicios",
    },
  ];
  return (
    <header className="Header w-full bg-primary">
      <div className="Header__container">
        <Link to="/" className="Header__logo">
          Ecomerce comprame algo
        </Link>
        <MainMenu itemsMenu={itemsMenu} />
      </div>
    </header>
  );
}

export { Header };
