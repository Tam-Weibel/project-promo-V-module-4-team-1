import React from 'react';
import { Link} from 'react-router-dom';
import '../scss/layout/Btn.scss';
import '../scss/layout/Link.scss';



function ButtonSeeProjects() {
  return (
    <Link to="/listProject" className='link'>
      <button className='btn'>Mira tus tarjetas</button>
    </Link>
    
  )
}

export default ButtonSeeProjects;