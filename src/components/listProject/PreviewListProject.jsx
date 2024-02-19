import cover from '../../images/mockup/mockup4.jpg';
import user from '../../images/user.jpeg';
import PropTypes from 'prop-types';
import '../../scss/layout/PreviewListProject.scss';

function PreviewListProject({ formData }) {
  return (
    <section className='previewtwo'>
      <img className='previewtwo__image' src={formData.photo || cover} alt='' />

      <article className='preview__card cardtwo'>
        <div className='texttwo'>
          <p className='texttwo__subtitle'>Personal Project Card</p>
          {/* <hr className='text__line' /> la idea es quitar este hr y poner un boder bottom al subtitle */}

          <h2 className='texttwo__title'> {formData.name || 'Elegant Workspace'} </h2>
          <p className='texttwo__slogan'> {formData.slogan || 'Diseños Exclusivos'} </p>
          <p className='texttwo__desc'>
            {formData.desc ||
              'Lorem, ipcorrupti ipsum!'}
          </p>
          <section className='texttwo__technologies'>
            <p className='texttwo__technologies--p'> {formData.technologies || 'React JS - HTML -  CSS'}</p>
          </section>
          <section className='texttwo__icons'>
            <a href={formData.repo} target='_blank'  rel="noreferrer" className='texttwo__icons--link'>
              <i className='fa-brands fa-github text__iconsColor'></i>
            </a>
            <a href={formData.demo} target='_blank'  rel="noreferrer" className='texttwo__icons--link' > 
              <i className='fa-solid fa-globe'></i>
            </a>
          </section>
        </div>

        <div className='profile'>
          <img className='profile__image' src={formData.image || user} alt='' />
          <p className='profile__job'> {formData.job || 'Full Stack Developer'} </p>
          <p className='profile__name'> {formData.autor || 'Emmelie Björklund'} </p>
        </div>
      </article>
    </section>
  );
}
PreviewListProject.propTypes = {
    formData: PropTypes.object.isRequired, 
  };

export default PreviewListProject