import "./Footer.scss";
import facebook from "../../assets/img/facebook.png";
import twitter from "../../assets/img/twitter.png";
import instagram from "../../assets/img/instagram.png";

function Footer() {
  console.log("Aqui")
  return (
    <footer className="footer">
      <div>
          <ul className="sci">
          <li><a href="#"><img src={facebook} alt="" /></a></li>
          <li><a href="#"><img src={twitter} alt="" /></a></li>
          <li><a href="#"><img src={instagram} alt="" /></a></li>
        </ul>
      </div>
        <p className="p">Todos los derechos reservados | LuisApp</p>
    </footer>
  );
}

export { Footer };
