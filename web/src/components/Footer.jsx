import cookielogo from "../images/cookie.png";
import "../scss/core/Variables.scss";
import "../scss/layout/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copy">©Cookie Team 2024</p>
      <Link to="/contact" className="link">
          <img className="nav__logo" src={logocookie} alt="logo Cookie" />
      </Link>
    </footer>
  );
}
export default Footer;
