import cookielogo from "../images/cookielogo1.png";
import "../scss/core/Variables.scss";
import "../scss/layout/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copy">©Cookie Team 2024</p>
      <div className="hiddenDiv">
        <div className="hiddenMsg">
         ¡Descubre al equipo!
        </div>
        <img className="logo" src={cookielogo} alt="logo Adalab" />
      </div>
    </footer>
  );
}
export default Footer;
