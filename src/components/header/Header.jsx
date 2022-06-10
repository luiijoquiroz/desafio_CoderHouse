import { Link } from "react-router-dom";
import { Toggle } from '../../ui/index';
import "./Header.scss";


function Header({setBannerState}) {
  return (
    <header>
      <Link to="/" >
        <h2 className="logo">Mi logo</h2>
      </Link>
      <Toggle setBannerState={setBannerState}  />
    </header>
  );
}

export { Header };
