import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/layout/btn.scss';
import '../scss/layout/Link.scss';

function ButtonCreateCard() {
  return (
    <Link to="/cardProject" className='link'>
      <button className="btn">Crea tu tarjeta</button>
    </Link>
  );
}

export default ButtonCreateCard;
