import React from 'react';
import PropTypes from 'prop-types';
import Main from '../Main.jsx';


function CardProject({
  hideCardLink,
  handleClickCreateCard,
  setFormData,
  formData,
  cardLink,
  handleInput,
  handleClearForm,
  setImageSize,
  imageSize,
  missingImage
}) {
  return (
      <Main
        hideCardLink={hideCardLink}
        handleClickCreateCard={handleClickCreateCard}
        handleInput={handleInput}
        setFormData={setFormData}
        formData={formData}
        cardLink={cardLink}
        handleClearForm={handleClearForm}
        setImageSize={setImageSize}
        imageSize={imageSize}
        missingImage={missingImage}
      />
  );
}

CardProject.propTypes = {
  setFormData: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  handleInput: PropTypes.func.isRequired,
  handleClickCreateCard: PropTypes.func.isRequired,
  hideCardLink: PropTypes.string.isRequired,
  cardLink: PropTypes.string,
  handleClearForm: PropTypes.func.isRequired,
  setImageSize: PropTypes.func.isRequired,
  imageSize: PropTypes.string.isRequired,
  missingImage: PropTypes.string.isRequired
};
export default CardProject;
