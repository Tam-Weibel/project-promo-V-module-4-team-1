import cover from '../images/mockup/mockup4.jpg';
import user from '../images/user.png';
import PropTypes from 'prop-types';
import '../scss/layout/Preview.scss';

function Preview({ formData }) {
  return (
    <section className='preview'>
      <img className='preview__image' src={formData.image || cover} alt='' />
      <article className='card'>
        <div className='text'>
          <p className='text__subtitle'>Personal Project Card</p>

          <h2 className='text__title'> {formData.namePj || 'Elegant Workspace'} </h2>
          <p className='text__slogan'> {formData.slogan || 'Diseños Exclusivos'} </p>
          <p className='text__desc'>
            {formData.descriptionPj || 'Lorem, ipcorrupti ipsum!'}
          </p>
          <section className='text__technologies'>
            <p className='text__technologies--p'> {formData.technologies || 'React JS - HTML -  CSS'}</p>
          </section>
          <section className='text__icons'>
            <a href={formData.gitUrl} target='_blank'  rel="noreferrer" className='text__icons--link'>
              <i className='fa-brands fa-github text__iconsColor'></i>
            </a>
            <a href={formData.demoUrl} target='_blank'  rel="noreferrer" className='text__icons--link' > 
              <i className='fa-solid fa-globe'></i>
            </a>
          </section>
        </div>

        <div className='previewProfile'>
          <figure className='previewProfile__figure'>
            <img className='previewProfile__figure--img' src={formData.photo || user} alt='' />
          </figure>
          <p className='previewProfile__job'> {formData.job || 'Full Stack Developer'} </p>
          <p className='previewProfile__name'> {formData.nameAut || 'Emmelie Björklund'} </p>
        </div>
      </article>
    </section>
  );
}
Preview.propTypes = {
  formData: PropTypes.object.isRequired, 
};
export default Preview;
