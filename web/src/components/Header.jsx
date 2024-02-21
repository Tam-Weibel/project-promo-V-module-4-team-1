import { Link } from 'react-router-dom';
import logocookie from '../images/cookie.png';
import '../scss/core/Variables.scss';
import '../scss/layout/Header.scss';

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="link">
          <i className="fa-solid fa-reply  nav__title"></i>
          {/* <span className="nav__title"> */}
          {/* <i class="fa-solid fa-laptop-code"></i> */}
          {/* <i className="fa-brands fa-themeisle  nav__title--bird"></i> */}
          {/* <i className="fa-solid fa-arrow-left-long  nav__title--arrow"></i> */}
          {/* </span> */}
        </Link>
        <img className="nav__logo" src={logocookie} alt="logo Cookie" />
      </nav>
    </header>
  );
}
export default Header;
