import React from 'react';
import PropTypes from 'prop-types';
import '../scss/layout/Btn.scss';
import '../scss/layout/GetAvatar.scss';

function GetAvatar({ setFormData, text, name, formData, setImageSize, setMissingImage }) {
  const fr = new FileReader();
  const myFileField = React.createRef();

  const uploadImage = (ev) => {
    setMissingImage('hidden');
    console.log('El fichero elegido es', ev.currentTarget.files[0]);
    console.log('el length es', ev.currentTarget.files.length);
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];
      if (myFile.size > 50 * 1024) {
        ev.currentTarget.value = null;
        setImageSize('alert');
        return;
      } else {
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
<<<<<<< HEAD
   
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
     
    
=======
    <label className='btn uploadLabel'>
      {text}
      <input
        type='file'
        ref={myFileField}
        style={{ display: 'none' }}
        onChange={uploadImage}
        name={name}
      />
    </label>
>>>>>>> dev
  );
}

GetAvatar.propTypes = {
  setFormData: PropTypes.func.isRequired,
  text: PropTypes.string,
  name: PropTypes.string,
  formData: PropTypes.object.isRequired,
  setImageSize: PropTypes.func.isRequired,
  setMissingImage: PropTypes.func.isRequired,
};

export default GetAvatar;
