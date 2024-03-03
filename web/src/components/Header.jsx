import { Link } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';

// import logocookie from '../images/cookie.png';
import '../scss/core/Variables.scss';
import '../scss/layout/Header.scss';
import '../scss/layout/Link.scss';

function Header({loggedIn, userName, handleLogOut, toggleMenu, menu}) {
 
  let loggedInMenu = loggedIn === true ? 'hidden' : '';
  let notLoggedIn = loggedIn === false ? 'hidden' : '';

  let bars = menu === false ? 'bars' : 'xmark';

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="link">
          <i className="fa-solid fa-house nav__title"></i>
        </Link>
        <div className='nav__menu'>
          <p className={`welcome ${notLoggedIn}`}>{`Bienvenida, ${userName}`}</p>
          <nav onClick={toggleMenu} className="navBtn">
            <i className={`fa-solid fa-${bars} navBtn_bars`}></i>
          </nav>
        </div>
      </nav>
      
      <ul className={`hamburger ${menu ? 'isActive' : ''}`}>
        <li className={`hamburger__li ${loggedInMenu}`}>
          <Link to="/register" className="link" onClick={toggleMenu}>
            <h3>Registrate</h3>
          </Link>
        </li>
        <li className={`hamburger__li ${loggedInMenu}`}>
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
        <li className={`hamburger__li link ${notLoggedIn}`} onClick={handleLogOut}>
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </li>
      </ul>
    </header>
  );
}
Header.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  userName: PropTypes.string,
  handleLogOut: PropTypes.func.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  menu: PropTypes.bool.isRequired
};

export default Header;
