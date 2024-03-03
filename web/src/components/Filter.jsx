import '../scss/layout/Filter.scss';
import PropTypes from 'prop-types';


function Filter({loggedIn, setFilterText}) {
  let notLoggedIn = loggedIn === false ? 'hidden' : '';
  const handlefilter = (ev) => {
    setFilterText(ev.target.value);
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
      />
      <div className='filter__lists'>
        <div className='radio'>
          <label className="radio__label" htmlFor="">Mis proyectos</label>
          <input className="radio__selector" type="radio"  name="filterRadio" id="mine" />
        </div>
        <div className='radio'>
          <label className="radio__label" htmlFor="">Todos los proyectos</label>
          <input className="radio__selector" type="radio"  name="filterRadio" id="all" />
        </div>
      </div>
      
    </form>
  );
}
Filter.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  setFilterText: PropTypes.func.isRequired,

}
export default Filter;
