import '../../scss/layout/Contact.scss';
import ContactCard from './ContactCard';
import PropTypes from 'prop-types';

function Contact({team}) {
  const renderTeam = team.map((member) => {
    return  (
        < ContactCard member={member} />
    )
  })
  return (
    <div  className='contact'>
      {renderTeam}
    </div>
  )
}
Contact.propTypes = {
  team: PropTypes.array.isRequired,
};

export default Contact