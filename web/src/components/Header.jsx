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
        <img className="nav__logo" src={logocookie} alt="logo Cookie" />
      </nav>
    </header>
  );
}
export default Header;
