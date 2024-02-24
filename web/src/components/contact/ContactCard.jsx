import '../../scss/layout/ContactCard.scss';
import user from '../../images/user.png';

const ContactCard = () => {
  return (
    <>
        <article className='cardTwo'>
        <div className='textTwo'>
          <h2 className='textTwo__name'>My name here</h2>
          <p className='textTwo__desc'>A little about me! Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eos modi dignissimos quis magni fugit excepturi obcaecati est distinctio, non consequatur ipsum ipsa aut. Tempora iusto possimus harum distinctio corporis.</p>
          <section className='textTwo__icons'>
            <a href='#' target='_blank'  rel="noreferrer" className='textTwo__icons--link'>
              <i className='fa-brands fa-github text__iconsColor'></i>
            </a>
            <a href='#' target='_blank'  rel="noreferrer" className='textTwo__icons--link' > 
              <i className='fa-brands fa-linkedin'></i>
            </a>
            <a href='#' target='_blank'  rel="noreferrer" className='textTwo__icons--link' > 
                <i className="fa-solid fa-envelope"></i>
            </a>
          </section>
        </div>

        <div className='profile'>
          <img className='profile__image' src={user} alt='' />
          <p className='profile__job'>Junior Full Stack Developer</p>
          <p className='profile__tech'>React - JS - HTML - CSS</p>
        </div>
      </article>
    </>
  )
}

export default ContactCard