import { Link } from "react-router-dom";
import { MainMenu } from "../";
import "./NavBar.scss";

function NavBar() {
  return (
    <div className="NavBar">
      <Link className="NavBar__logo" to="/">
        LOGO
      </Link>

      <MainMenu />
    </div>
  );
}

export { NavBar };
