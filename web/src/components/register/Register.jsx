import '../../scss/layout/Main.scss';
import '../../scss/layout/Btn.scss';
import '../../scss/layout/Register.scss';
import React from 'react';
import object from '../../services/Api.js';
import PropTypes from 'prop-types';
import localStorage from '../../services/LocalStorage.js';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Register({ setLoggedIn, setUserName }) {
  const [signInData, setSignInData] = useState({
    username: '',
    email: '',
    userpassword: '',
  });

  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    setSignInData({
      ...signInData,
      [inputName]: inputValue,
    });
  };
  const [returnMessage, setReturnMessage] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [showMessage, setShowMessage] = useState('hidden');
  const [showLink, setShowLink] = useState('');
  const handleSubmitSign = (ev) => {
    ev.preventDefault();
    object.callToApiSign(signInData).then((response) => {
      setReturnMessage(response.message);
      setIsDisabled(response.success);
      setShowMessage('');
      setShowLink(response.success ? '' : 'hidden');
      if (response.success) {
        setLoggedIn(true);
        setUserName(signInData.username);
        localStorage.set('user name', signInData.username);
        localStorage.set('token', response.token);
      } else {
        setLoggedIn(false);
      }
    });
  };
  useEffect(() => {
    return () => {
      setReturnMessage('');
      setIsDisabled(false);
      setShowMessage('hidden');
      setShowLink('');
    };
  }, []);

  return (
    <main className='main'>
      <h1 className='signInTitle'>REGISTRATE</h1>

      <form action='#' className='signInForm' onSubmit={handleSubmitSign}>
        <label htmlFor='name' className='labelSignIn'>
          Nombre completo
        </label>
        <input
          onChange={handleInput}
          className='inputSignIn'
          type='text'
          id='name'
          placeholder='Nombre Apellidos'
          name='username'
          required
          disabled={isDisabled}
        />

        <label htmlFor='email' className='labelSignIn'>
          Email
        </label>
        <input
          onChange={handleInput}
          className='inputSignIn'
          type='email'
          id='email'
          placeholder='nombre.apellidos@mail.com'
          name='email'
          required
          disabled={isDisabled}
        />

        <label htmlFor='password' className='labelSignIn'>
          Password
        </label>
        <input
          onChange={handleInput}
          className='inputSignIn'
          type='password'
          id='password'
          name='userpassword'
          disabled={isDisabled}
        />

        <input
          className='btn btnSignIn'
          type='submit'
          value='Registrarse'
        ></input>
      </form>
      <div className={`returnMessage ${showMessage}`}>
        <p className='returnMessage__title'>{returnMessage}</p>
        <p className={showLink}>
          <Link to="/cardProject" className="returnMessage__link">Crea</Link> tu primera tarjeta de proyecto.</p>
        <p className={showLink}><Link to="/listProject" className="returnMessage__link">Mira las tarjetas</Link> de nuestros usuarios.</p>
      </div>
    </main>
  );
}

Register.propTypes = {
  setLoggedIn: PropTypes.func.isRequired,
  setUserName: PropTypes.func.isRequired
};

export default Register;
