import React from 'react';
import '../../scss/layout/Main.scss';
import '../../scss/layout/Btn.scss';
import '../../scss/layout/LogIn.scss';
import object from '../../services/Api.js';
import { useState } from 'react';

function LogIn() {
  const [logData, setLogData] = useState({
    email: '',
    userpassword: '',
  });

  const handleLogData = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    setLogData({
      ...logData,
      [inputName]: inputValue,
    });
  };
  const handleSubmitLog = (ev) => {
    ev.preventDefault();
    object.callToApiLog(logData).then((response) => {
      setLogData(response);
    });
    console.log('wdewqedqwe');
    console.log(logData);
  };

  return (
    <main className="main">
      <h1 className="logInTitle">INICIAR SESIÓN</h1>

      <form className="logInForm" onSubmit={handleSubmitLog}>
        <label htmlFor="email" className="labelLogIn">
          Email
        </label>
        <input
          onChange={handleLogData}
          className="inputLogIn"
          type="email"
          id="email"
          placeholder="nombre.apellidos@mail.com"
          name='email'
          required
        />

        <label htmlFor="password" className="labelLogIn">
          Password
        </label>
        <input
          onChange={handleLogData}
          className="inputLogIn"
          type="password"
          id="password"
          name='userpassword'
        />
        <input className="btn btnLogIn" type="submit" value="Enviar"></input>
      </form>
      
    </main>
  );
}

export default LogIn;
