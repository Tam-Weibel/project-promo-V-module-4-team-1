import '../../scss/layout/ContactCard.scss';
import React, { useState, useEffect } from 'react';
import user from '../../images/user.png';
import PropTypes from 'prop-types';

const ContactCard = ({member}) => {
  const [photoSrc, setPhotoSrc] = useState(null);

  useEffect(() => {
    if (member.photo) {
      const uint8Array = new Uint8Array(member.photo.data);
      const base64 = btoa(String.fromCharCode.apply(null, uint8Array));
      const photoSrc = `data:image/png;base64,${base64}`;
      setPhotoSrc(photoSrc);
    }
  }, [member.photo]);
  

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
            <a href={"mailto:" + member.email} target='_blank'  rel="noreferrer" className='textTwo__icons--link' > 
              <i className="fa-solid fa-envelope"></i>
            </a>
          </section>
        </div>

        <div className='profile'>
          <figure className='profile__figure'>
            <img className='profile__figure--img' src={photoSrc || user} alt='' />
          </figure>
          <p className='profile__job'>{member.job || 'Full Stack Developer'}</p>
          <p className='profile__tech'>{member.tech ||'React - JS - HTML - CSS'}</p>
        </div>
      </article>
    </>
  )
}
ContactCard.propTypes = {
  team: PropTypes.object
};
export default ContactCard