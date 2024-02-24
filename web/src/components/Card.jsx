import React from 'react'
import '../scss/layout/PreviewListProject.scss';
import PropTypes from 'prop-types';
import user from '../images/user.png';

function Card({project}) {
  return (
    <article className='cardtwo'>
        <div className='texttwo'>
          <p className='texttwo__subtitle'>Personal Project Card</p>
          {/* <hr className='text__line' /> la idea es quitar este hr y poner un boder bottom al subtitle */}

          <h2 className='texttwo__title'> {project.namePj || 'Elegant Workspace'} </h2>
          <p className='texttwo__slogan'> {project.slogan || 'Diseños Exclusivos'} </p>
          <p className='texttwo__desc'>
            {project.descriptionPj ||
              'Lorem, ipcorrupti ipsum!'}
          </p>
          <section className='texttwo__technologies'>
            <p className='texttwo__technologies--p'> {project.technologies || 'React JS - HTML -  CSS'}</p>
          </section>
          <section className='texttwo__icons'>
            <a href={project.gitUrl} target='_blank'  rel="noreferrer" className='texttwo__icons--link'>
              <i className='fa-brands fa-github text__iconsColor'></i>
            </a>
            <a href={project.demoUrl} target='_blank'  rel="noreferrer" className='texttwo__icons--link' > 
              <i className='fa-solid fa-globe'></i>
            </a>
          </section>
        </div>

        <div className='profile'>
          <img className='profile__image' src={project.photo || user} alt='' />
          <p className='profile__job'> {project.job || 'Full Stack Developer'} </p>
          <p className='profile__name'> {project.nameAut || 'Emmelie Björklund'} </p>
        </div>
      </article>
  )
}
Card.propTypes = {
    project: PropTypes.object.isRequired, 
  };

export default Card