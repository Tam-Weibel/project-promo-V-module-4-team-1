import '../../scss/layout/Contact.scss';
import ContactCard from './ContactCard';
import PropTypes from 'prop-types';

function Contact({team}) {
  const renderTeam = team.map((member) => {
    return  (
      <div key={member.team_id}>
        < ContactCard member={member}/>
      </div>
    )
  })
  return (
   <section className='contact'>
      <h2 className='contact__title'>¡Bienvenidos!</h2>
      <h3 className='contact__h3'> Conoce a las mentes creativas detrás de nuestra página web</h3>
      <p className='contact__p'>¡Hola y bienvenidos a nuestro espacio digital! Somos un equipo apasionado de creadoras comprometidas con dar vida a experiencias web cautivadoras. Permítenos presentarte a las mentes creativas detrás de cada línea de código, diseño elegante y contenido inspirador que encuentras aquí.</p>
      <div  className='contact__cards'>
        {renderTeam}
      </div>
    </section>
  )
}
Contact.propTypes = {
  team: PropTypes.array.isRequired,
};

export default Contact