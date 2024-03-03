import "../scss/layout/Filter.scss";
import PropTypes from "prop-types";

function Filter({ loggedIn, setFilterText, setChecked, checked, filterText }) {
  let notLoggedIn = loggedIn === false ? "hidden" : "";
  const handlefilter = (ev) => {
    setFilterText(ev.target.value);
  };

  const handleSetChecked = (event) => {
    // Puedes usar event.target.checked para obtener el estado actual del checkbox
    setChecked(event.target.checked);
  };

  // evitar que cuando escibes en el campo de busqueda si das enter se refresque la pagina
  const handleIntro = (ev) => {
    if (ev.key === "Enter") {
      ev.preventDefault();
    }
  };

  return (
    <form className={`filter ${notLoggedIn}`}>
      {/* <label htmlFor="">Busca por proyecto</label> */}
      <input
        className="filter__input"
        type="text"
        placeholder="Ejemplo: diseña"
        name="fText"
        id="fText"
        maxLength="50"
        onChange={handlefilter}
        onKeyDown={handleIntro}
        value={filterText}
      />
      <div className="filter__lists">
        <div className="radio">
          <label className="radio__label" htmlFor="">
            Mis proyectos
          </label>
          <input
            className="radio__selector"
            type="checkbox"
            name="filterRadio"
            id="mine"
            onChange={handleSetChecked}
            checked={checked}
          />
        </div>


        {/* <div className='radio'>
          <label className="radio__label" htmlFor="">Todos los proyectos</label>
          <input className="radio__selector" type="radio"  name="filterRadio" id="all" />
        </div> */}
      </div>
    </form>
  );
}
Filter.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  setFilterText: PropTypes.func.isRequired,
  setChecked: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  filteredProjects: PropTypes.func.isRequired,
  filterText: PropTypes.func.isRequired,
  
  
};
export default Filter;
