import { Link } from "react-router-dom";
import { MainMenu } from "../";
import "./NavBar.scss";

function NavBar() {
  return (
    <div>
      <Link to="/">
        LOGO
      </Link>
      <MainMenu />
    </div>
  );
}

export { NavBar };
