import { Link } from 'react-router-dom';
import { useState } from 'react';
// import logocookie from '../images/cookie.png';
import '../scss/core/Variables.scss';
import '../scss/layout/Header.scss';
import '../scss/layout/Link.scss';

function Header() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="link">
          <i className="fa-solid fa-house nav__title"></i>
        </Link>
        <div onClick={toggleMenu} className="navBtn">
          <i className="fa-solid fa-bars navBtn_bars"></i>
        </div>
      </nav>
      <ul className={`hamburger ${menu ? 'isActive' : ''}`}>
        <li className="hamburger__li">
          <Link to="/register" className="link" onClick={toggleMenu}>
            <h3>Registrate</h3>
          </Link>
        </li>
        <li className="hamburger__li">
          <Link to="/login" className="link" onClick={toggleMenu}>
            <h3>Iniciar sesión</h3>
          </Link>
        </li>
        <li className="hamburger__li">
          <Link to="/cardProject" className="link" onClick={toggleMenu}>
            <h3>Crea tu tarjeta</h3>
          </Link>
        </li>
        <li className="hamburger__li">
          <Link to="/listProject" className="link" onClick={toggleMenu}>
            <h3>Mira tus tarjetas</h3>
          </Link>
        </li>
        <li className="hamburger__li">
          <Link to="/contact" className="link" onClick={toggleMenu}>
            <h3>Conócenos</h3>
          </Link>
        </li>
        <li className="hamburger__li">
          <Link to="/contactform" className="link" onClick={toggleMenu}>
            <h3>Contacta</h3>
          </Link>
        </li>
      </ul>
    </header>
  );
}
export default Header;
