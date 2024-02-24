import { Link } from 'react-router-dom';
import logocookie from '../images/cookie.png';
import '../scss/core/Variables.scss';
import '../scss/layout/Header.scss';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="link">
          <i className="fa-solid fa-house nav__title"></i>
        </Link>
        <Link to="/contact" className="link">
          <img className="nav__logo" src={logocookie} alt="logo Cookie" />
        </Link>
      </nav>
    </header>
  );
}
export default Header;
