import '../../scss/layout/ContactCard.scss';
import user from '../../images/user.png';

const ContactCard = ({member}) => {
  return (
    <>
        <article className='cardTwo'>
        <div className='textTwo'>
          <h2 className='textTwo__name'>{member.name}</h2>
          <p className='textTwo__desc'>{member.desc || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eos modi dignissimos quis magni fugit excepturi obcaecati est distinctio, non consequatur ipsum ipsa aut. Tempora iusto possimus harum distinctio corporis.'}</p>
          <section className='textTwo__icons'>
            <a href={member.github} target='_blank'  rel="noreferrer" className='textTwo__icons--link'>
              <i className='fa-brands fa-github text__iconsColor'></i>
            </a>
            <a href={member.linkedin} target='_blank'  rel="noreferrer" className='textTwo__icons--link' > 
              <i className='fa-brands fa-linkedin'></i>
            </a>
            <a href={member.email} target='_blank'  rel="noreferrer" className='textTwo__icons--link' > 
                <i className="fa-solid fa-envelope"></i>
            </a>
          </section>
        </div>

        <div className='profile'>
          <img className='profile__image' src={member.photo || user} alt='' />
          <p className='profile__job'>{member.job || 'Full Stack Developer'}</p>
          <p className='profile__tech'>{member.tech ||'React - JS - HTML - CSS'}</p>
        </div>
      </article>
    </>
  )
}

export default ContactCard