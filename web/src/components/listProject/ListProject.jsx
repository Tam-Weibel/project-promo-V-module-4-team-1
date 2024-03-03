import PropTypes from "prop-types";
import ButtonCreateCard from "../ButtonCreateCard.jsx";
import "../../scss/layout/Main.scss";
import "../../scss/layout/ListProject.scss";
import PreviewListProject from "./PreviewListProject.jsx";
import Filter from "../Filter.jsx";
import { useState } from "react";

function ListProject({ projectList, loggedIn, userName}) {
  const [filterText, setFilterText] = useState("");
  const [checked, setChecked] = useState(false);

  let message;

  const filteredProjects = projectList
   .filter(project =>
    Object.values(project).some(value =>
      value && value.toString().toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
    ))
    .filter(project => {
      if(checked){
        return project.nameAut.includes(userName)
      }
      return true;
    });

    if (projectList.length === 0) {
      message = "No se encontraron proyectos que coincidan con la búsqueda.";
    } else if (filteredProjects.length === 0 && filterText.trim() !== "") {
      message = `No se encontraron proyectos que coincidan con "${filterText}".`;
    }

  const renderProject = filteredProjects.map((project, index) => {
    return (
      <li key={index} className="listProject__li">
        <a
          href={`https://project-promo-v-module-4-team-1.onrender.com/detail/${project.idProject}`}
          target="_blank"
          rel="noreferrer"
        >
          {<PreviewListProject project={project} />}
        </a>
      </li>

    );
  });
  return (
    <main className="main">
      <Filter loggedIn={loggedIn} setFilterText={setFilterText} setChecked={setChecked} checked={checked} filteredProjects={filteredProjects} filterText={filterText}/>
      <ButtonCreateCard />
      <ul className="listProject">{renderProject}</ul>
      {message && <p className="message">{message}</p>}
    </main>
  );
}
ListProject.propTypes = {
  projectList: PropTypes.array.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  userName:PropTypes.string.isRequired,
  setChecked: PropTypes.func,
  checked: PropTypes.bool,
};

export default ListProject;
