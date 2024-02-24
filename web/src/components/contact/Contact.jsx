import '../../scss/layout/Contact.scss';
import ContactCard from './ContactCard';

function Contact() {
  return (
    <div  className='contact'>
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
        <ContactCard />
    </div>
  )
}

export default Contact