import cover from '../../images/mockup/mockup4.jpg';
import user from '../../images/user.png';
import PropTypes from 'prop-types';
import '../../scss/layout/PreviewListProject.scss';
import '../../scss/layout/Card.scss';

import Card from '../Card';

function PreviewListProject({ project }) {
  return (
    <section className='previewtwo'>
      <img className='previewtwo__image' src={project.image || cover} alt='' />
      <div className='previewtwo__card'>
        < Card project={project} />
      </div>
    </section>
  );
}
PreviewListProject.propTypes = {
  project: PropTypes.object.isRequired, 
  };

export default PreviewListProject