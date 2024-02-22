import cookielogo from "../images/cookie.png";
import "../scss/core/Variables.scss";
import "../scss/layout/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copy">©Cookie Team 2024</p>
      <img className="footer__logo" src={cookielogo} alt="logo Adalab" />
    </footer>
  );
}
export default Footer;
