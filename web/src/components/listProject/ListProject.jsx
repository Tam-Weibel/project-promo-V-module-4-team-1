
import PropTypes from 'prop-types';
import ButtonCreateCard from '../ButtonCreateCard.jsx';
import '../../scss/layout/Main.scss';
import '../../scss/layout/ListProject.scss';
import PreviewListProject from './PreviewListProject.jsx';

function ListProject({ projectList }) {
  const renderProject = projectList.map((project, index) => {
    return  (
      <li key={index} className="listProject__li">
        < PreviewListProject project={project} />
      </li>
    )
  })
  return (
    <main className="main">
      <ButtonCreateCard />
        <ul className="listProject">
          {renderProject}
        </ul>
    </main>
  );
}
ListProject.propTypes = {
  projectList: PropTypes.array.isRequired,
};

export default ListProject;
