import PropTypes from 'prop-types';
import ButtonCreateCard from '../ButtonCreateCard.jsx';
import '../../scss/layout/Main.scss';
import '../../scss/layout/ListProject.scss';
import PreviewListProject from './PreviewListProject.jsx';
import Filter from '../Filter.jsx';
import { useState } from 'react';

function ListProject({ projectList, loggedIn }) {
  const[filterText, setFilterText] = useState('');
  const filteredProjects = projectList.filter(project => project.descriptionPj.includes(filterText));
 
  console.log(filteredProjects);

  const renderProject = filteredProjects.map((project, index) => {
    return (
      <li key={index} className="listProject__li">
        <a  href={`http://localhost:5001/detail/${project.idProject}`}
          target="_blank" rel="noreferrer">            
          {<PreviewListProject project={project} />}
        </a>
      </li>
    );
  });
  return (
    <main className="main">
      <Filter loggedIn={loggedIn} setFilterText={setFilterText} />
      <ButtonCreateCard />
      <ul className="listProject">{renderProject}</ul>
    </main>
  );
}
ListProject.propTypes = {
  projectList: PropTypes.array.isRequired,
  loggedIn: PropTypes.bool.isRequired,

};

export default ListProject;
