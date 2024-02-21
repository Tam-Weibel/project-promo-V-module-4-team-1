import GetAvatar from './GetAvatar.jsx';
import '../scss/layout/Form.scss';
import '../scss/layout/Btn.scss';
import CardLink from './CardLink.jsx';
import PropTypes from 'prop-types';

function Form({
  handleInput,
  setFormData,
  formData,
  handleClickCreateCard,
  hideCardLink,
  cardLink,
  handleClearForm,
  setImageSize,
  imageSize,
  missingImage,
  setMissingImage
}) {
  return (
    <form className="form" onSubmit={handleClickCreateCard}>
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
          required
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
          required
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
          required
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
          required
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
          required
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
          required
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
          required
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
          required
        />
        <section className="boxBtns">
          <GetAvatar
            setFormData={setFormData}
            text="Subir foto de proyecto"
            name="photo"
            formData={formData}
            setImageSize={setImageSize}
            setMissingImage={setMissingImage}
          />
          <GetAvatar
            setFormData={setFormData}
            text="Subir foto de autora"
            name="image"
            formData={formData}
            setImageSize={setImageSize}
            setMissingImage={setMissingImage}
          />
        </section>
        <p className={`alert ${imageSize}`}>
          * La imagen seleccionada no puede superar los 50 KB.
        </p>
        <button type='submit' className="btn">
          Crear Tarjeta
        </button>

        <CardLink cardLink={cardLink} hideCardLink={hideCardLink} />
        <p className={`alert ${missingImage}`}>
          * Debe subir ambas fotos.
        </p>
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
  hideCardLink: PropTypes.string.isRequired,
  cardLink: PropTypes.string,
  handleClearForm: PropTypes.func.isRequired,
  setImageSize: PropTypes.func.isRequired,
  imageSize: PropTypes.string.isRequired,
  missingImage: PropTypes.string.isRequired,
  setMissingImage: PropTypes.func.isRequired
};
export default Form;
