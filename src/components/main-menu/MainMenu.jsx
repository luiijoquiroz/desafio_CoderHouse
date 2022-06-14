import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MainMenu.scss";

 const itemsMenu = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Disciplinas",
    url: "/disciplinas",
  },
  {
    text: "Nosotros",
    url: "/nosotros",
  },
  {
    text: "Servicios",
    url: "/servicios",
  }
];

function MainMenu({state }) {
  const [menuState, setMenuState] = useState('menu')
  
  useEffect(() => {
    setMenuState('menu '+state)
  },[state] )
  
  console.log("MainMenu", menuState)
  return (
    <div className={menuState}>
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
