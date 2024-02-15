import { Link } from 'react-router-dom';
import logoAlab from '../images/logo-adalab.png';
import '../scss/core/Variables.scss';
import '../scss/layout/Header.scss';
import PropTypes from 'prop-types';

function Header({ hero }) {
  return (
    <header className="header">
      <nav className="nav">
        <Link to='/' className='link'>
          <span className="nav__title">
            <i className="fa-solid fa-laptop-code nav__title--icon"></i>Proyectos
            Molones
          </span>
        </Link>
        <img className="nav__logo" src={logoAlab} alt="logo Adalab" />
      </nav>
      {hero}
    </header>
  );
}
export default Header;
