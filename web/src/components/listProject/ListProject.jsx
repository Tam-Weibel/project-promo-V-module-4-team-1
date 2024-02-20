import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../Footer.jsx';
import Preview from '../Preview.jsx';
import ButtonCreateCard from '../ButtonCreateCard.jsx';
import '../../scss/core/Variables.scss';
import '../../scss/layout/Header.scss';
import '../../scss/layout/Main.scss';
import '../../scss/layout/ListProject.scss';
import PreviewListProject from './PreviewListProject.jsx';



function ListProject({ projectList }) {
  const renderProject = projectList.map((project) => {
    return  (
      <li>
      < PreviewListProject project={project} /> {/*meter componente nuevo y NO previewListProject*/}
      </li>
    )
  })
  return (
    <main className="main">
      <ButtonCreateCard />
      <div className="listproject">
        <ul>
          {renderProject}
        </ul>
      </div>
    </main>
  );
}
ListProject.propTypes = {
  projectList: PropTypes.array.isRequired,
};

export default ListProject;
