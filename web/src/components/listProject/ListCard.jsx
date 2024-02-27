import '../../scss/layout/ListCard.scss';
import PropTypes from 'prop-types';

function ListCard({ project }) {
  return (
    <article className='listCard'>
      <div className='projectList'>
        <p className='projectList__subtitle'>Personal Project Card</p>
        <h2 className='projectList__title'>{project.namePj}</h2>
        <p className='projectList__slogan'>{project.slogan}</p>
        <section>
          <p className='projectList__technologies'>{project.technologies}</p>
        </section>
        <section className='projectList__icons'>
          <a
            href={project.gitUrl}
            target='_blank'
            rel='noreferrer'
            className='projectList__icons--link'
          >
            <i className='fa-brands fa-github text__iconsColor'></i>
          </a>
          <a
            href={project.demoUrl}
            target='_blank'
            rel='noreferrer'
            className='projectList__icons--link'
          >
            <i className='fa-solid fa-globe'></i>
          </a>
        </section>
      </div>

      <div className='profileList'>
        <figure className='profileList__figure'>
          <img
            className='profileList__figure--img'
            src={project.photo}
            alt=''
          />
        </figure>
        <p className='profileList__job'>{project.job}</p>
        <p className='profileList__name'>{project.nameAut}</p>
      </div>
    </article>
  );
}
ListCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ListCard;
