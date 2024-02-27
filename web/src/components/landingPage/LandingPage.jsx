import React from 'react';
import Hero from '../Hero';
import ButtonCreateCard from '../ButtonCreateCard';
import ButtonSeeProjects from '../ButtonSeeProjects';
import user from '../../images/user.png';
import '../../scss/layout/LandingPage.scss';
import '../../scss/layout/Card.scss';
import '../../scss/layout/Hero.scss';

function LandingPage() {
  return (
    <main className='main'>
      <Hero />
      <div className='landingBtns'>
        <ButtonCreateCard />
        <ButtonSeeProjects />
      </div>
      <div className='landingCard'>
        <article className='cardtwo'>
          <div className='texttwo'>
            <p className='texttwo__subtitle'>Personal Project Card</p>

            <h2 className='texttwo__title'>Elegant Workspace</h2>
            <p className='texttwo__slogan'>Diseños Exclusivos</p>
            <p className='texttwo__desc'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <section className='texttwo__technologies'>
              <p className='texttwo__technologies--p'>React JS - HTML - CSS</p>
            </section>
            <section className='texttwo__icons'>
              <a
                href='#'
                target='_blank'
                rel='noreferrer'
                className='texttwo__icons--link'
              >
                <i className='fa-brands fa-github text__iconsColor'></i>
              </a>
              <a
                href='#'
                target='_blank'
                rel='noreferrer'
                className='texttwo__icons--link'
              >
                <i className='fa-solid fa-globe'></i>
              </a>
            </section>
          </div>

          <div className='profile'>
            <figure className='profile__figure'>
              <img className='profile__figure--img' src={user} alt='' />
            </figure>
            <p className='profile__job'>Full Stack Developer</p>
            <p className='profile__name'>Emmelie Björklund</p>
          </div>
        </article>
      </div>
    </main>
  );
}

export default LandingPage;
