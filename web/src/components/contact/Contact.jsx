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
      <h2 className='contact__title'>titulo que esta pensando angela</h2>
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