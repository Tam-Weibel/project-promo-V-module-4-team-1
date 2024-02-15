import GetAvatar from './GetAvatar.jsx';
import '../scss/layout/Form.scss';
import Card from './Card.jsx';
import PropTypes from 'prop-types';

function Form({
  handleInput,
  setFormData,
  formData,
  handleClickCreateCard,
  hidden,
  cardLink,
  handleClearForm,
  setImageSize,
  imageSize,
}) {
  return (
    <form className="form">
      <h2 className="form__h2">Información</h2>

      <fieldset className="project">
        <section className="project__section">
          <p className="project__section--subtitle">Cuéntanos sobre el proyecto</p>
          <hr className="project__section--line" />
        </section>
        <input
          value={formData.name}
          onChange={handleInput}
          className="project__input"
          type="text"
          placeholder="Nombre del proyecto"
          name="name"
          id="nameId"
          maxLength="30"
        />
        <input
          value={formData.slogan}
          onChange={handleInput}
          className="project__input"
          type="text"
          name="slogan"
          id="sloganId"
          placeholder="Slogan del proyecto"
          maxLength="30"
        />
        <input
          value={formData.repo}
          onChange={handleInput}
          className="project__input"
          type="text"
          name="repo"
          id="repoId"
          placeholder="https://github.com/User/Repo/"
          maxLength="30"
        />
        <input
          value={formData.demo}
          onChange={handleInput}
          className="project__input"
          type="text"
          placeholder="https://User.github.io/Repo/"
          name="demo"
          id="demoId"
          maxLength="30"
        />
        <input
          value={formData.technologies}
          onChange={handleInput}
          className="project__input"
          type="text"
          placeholder="React JS - HTML - CSS..."
          name="technologies"
          id="techId"
          maxLength="30"
        />
        <textarea
          value={formData.desc}
          onChange={handleInput}
          className=" project__textarea"
          type="text"
          placeholder="Breve descripción del proyecto..."
          name="desc"
          id="descId"
          maxLength="150"
        ></textarea>
      </fieldset>

      <fieldset className="project">
        <section className="project__section">
          <p className="project__section--subtitle">Cuéntanos sobre la autora</p>
          <hr className="project__section--line" />
        </section>

        <input
          value={formData.autor}
          onChange={handleInput}
          className="project__input"
          type="text"
          placeholder="Tu nombre"
          name="autor"
          id="authorId"
          maxLength="30"
        />
        <input
          value={formData.job}
          onChange={handleInput}
          className="project__input"
          type="text"
          placeholder="Tu puesto"
          name="job"
          id="jobId"
          maxLength="30"
        />
        <section className="boxBtns">
          <GetAvatar
            setFormData={setFormData}
            text="Subir foto de proyecto"
            name="photo"
            formData={formData}
            setImageSize={setImageSize}
          />
          <GetAvatar
            setFormData={setFormData}
            text="Subir foto de autora"
            name="image"
            formData={formData}
            setImageSize={setImageSize}
          />
        </section>
        <p className={imageSize}>
          {' '}
          * La imagen seleccionada excede el tamaño máximo permitido de 50 KB.
        </p>
        <submit className="btn" onClick={handleClickCreateCard} {...hidden}>
          Crear Tarjeta
        </submit>

        <Card cardLink={cardLink} hidden={hidden} />

        <button className="btn" onClick={handleClearForm}>
          Limpiar Formulario
        </button>
      </fieldset>
    </form>
  );
}

Form.propTypes = {
  setFormData: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleClickCreateCard: PropTypes.func.isRequired,
  hidden: PropTypes.string.isRequired,
  cardLink: PropTypes.string,
  handleClearForm: PropTypes.func.isRequired,
  setImageSize: PropTypes.func.isRequired,
  imageSize: PropTypes.string.isRequired,
};
export default Form;
