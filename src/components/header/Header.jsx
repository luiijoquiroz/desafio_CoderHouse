import { Link } from "react-router-dom";
import { Toggle } from '../../ui/index';
import "./Header.scss";


function Header({ setState }) {
  return (
    <header>
      <Link to="/" >
        <h2 className="logo">MMA-Chile</h2>
      </Link>
      <Toggle setState={setState} />
    </header>
  );
}

export { Header };
