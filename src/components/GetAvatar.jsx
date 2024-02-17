import React from 'react';
import PropTypes from 'prop-types';
import '../scss/layout/Btn.scss';
import '../scss/layout/GetAvatar.scss';

function GetAvatar({ setFormData, text, name, formData, setImageSize }) {
  const fr = new FileReader();
  const myFileField = React.createRef();

  const uploadImage = (ev) => {
    console.log(
      'El fichero elegido es',
      ev.currentTarget.files[0]
    );
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];
      if (myFile.size > 50 * 1024) {
        ev.currentTarget.value = null;
        setImageSize('alert');
        return;
      } else{
        setImageSize('hidden');
      }
      fr.addEventListener('load', getImage);
      fr.readAsDataURL(myFile);
    }
  };

  const getImage = () => {
    const image = fr.result;
    setFormData({ ...formData, [name]: image });
  };

  return (
   
      <label className='uploadLabel btn'>
        {text}
        <input
          type='file'
          ref={myFileField}
          style={{ display: 'none' }}
          onChange={uploadImage}
          name={name}
        />
      </label>
     
    
  );
}

GetAvatar.propTypes = {
  setFormData: PropTypes.func.isRequired,
  text: PropTypes.string,
  name: PropTypes.string,
  formData: PropTypes.object.isRequired,
  setImageSize: PropTypes.func.isRequired,
};

export default GetAvatar;
