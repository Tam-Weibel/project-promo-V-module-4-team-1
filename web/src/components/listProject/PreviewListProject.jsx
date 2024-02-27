import PropTypes from 'prop-types';
import '../../scss/layout/PreviewListProject.scss';
import ListCard from './ListCard';

function PreviewListProject({ project }) {
  return (
    <section className='previewList'>
      <img className='previewList__image' src={project.image} alt='' />
      <div className='previewList__card'>
        <ListCard project={project} />
      </div>
    </section>
  );
}
PreviewListProject.propTypes = {
  project: PropTypes.object.isRequired,
};

export default PreviewListProject;
