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
          value={formData.namePj}
          onChange={handleInput}
          className="project__input"
          type="text"
          placeholder="Nombre del proyecto"
          name="namePj"
          id="nameId"
          maxLength="100"
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
          maxLength="100"
          required
        />
        <input
          value={formData.gitUrl}
          onChange={handleInput}
          className="project__input"
          type="text"
          name="gitUrl"
          id="repoId"
          placeholder="https://github.com/User/Repo/"
          maxLength="100"
          required
        />
        <input
          value={formData.demoUrl}
          onChange={handleInput}
          className="project__input"
          type="text"
          placeholder="https://User.github.io/Repo/"
          name="demoUrl"
          id="demoId"
          maxLength="100"
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
          maxLength="100"
          required
        />
        <textarea
          value={formData.descriptionPj}
          onChange={handleInput}
          className=" project__textarea"
          type="text"
          placeholder="Breve descripción del proyecto..."
          name="descriptionPj"
          id="descId"
          maxLength="300"
          required
        ></textarea>
      </fieldset>

      <fieldset className="project">
        <section className="project__section">
          <p className="project__section--subtitle">Cuéntanos sobre la autora</p>
          <hr className="project__section--line" />
        </section>

        <input
          value={formData.nameAut}
          onChange={handleInput}
          className="project__input"
          type="text"
          placeholder="Tu nombre"
          name="nameAut"
          id="authorId"
          maxLength="45"
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
          maxLength="45"
          required
        />
        <section className="boxBtns">
          <GetAvatar
            setFormData={setFormData}
            text="Subir foto de proyecto"
            name="image"
            formData={formData}
            setImageSize={setImageSize}
            setMissingImage={setMissingImage}
          />
          <GetAvatar
            setFormData={setFormData}
            text="Subir foto de autora"
            name="photo"
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
