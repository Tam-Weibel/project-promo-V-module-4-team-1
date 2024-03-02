import '../scss/layout/Filter.scss';

function Filter() {
  return (
    <form className='filter'>
      {/* <label htmlFor="">Busca por proyecto</label> */}
      <input
        className="filter__input"
        type="text"
        placeholder="Ejemplo: diseña"
        name="filterText"
        id="filterText"
        maxLength="50"
      />
      <div>
      <label className="filter__section" htmlFor="">Mis proyectos</label>
      <input className="filter__radio" type="radio"  name="filterRadio" id="mine" />
      <label className="filter__section" htmlFor="">Todos los proyectos</label>
      <input className="filter__radio" type="radio"  name="filterRadio" id="all" />

      </div>
      
    </form>
  );
}

export default Filter;
