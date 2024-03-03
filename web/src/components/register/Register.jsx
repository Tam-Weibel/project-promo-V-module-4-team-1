import '../../scss/layout/Main.scss';
import '../../scss/layout/Btn.scss';
import '../../scss/layout/SignIn.scss';
import React from 'react';
import object from '../../services/Api.js';
import { useState } from 'react';

function Register() {
  console.log('pintate');

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
  console.log(signInData);

  const handleSubmitSign = (ev) => {
    console.log("Estoy dentro de handle1");
    ev.preventDefault();
    object.callToApiSign(signInData).then((response) => {
      setSignInData(response);
    });
    console.log("Estoy dentro de handle2");
  };

  return (
    <main className="main">
      <h1 className="signInTitle">REGISTRATE</h1>

      <form action='#' className="signInForm" onSubmit={handleSubmitSign}>
        <label htmlFor="name" className="labelSignIn">
          Nombre completo 
        </label>
        <input
          onChange={handleInput}
          className="inputSignIn"
          type="text"
          id="name"
          placeholder="Nombre Apellidos"
          name='username'
          required
        />

        <label htmlFor="email" className="labelSignIn">
          Email
        </label>
        <input
          onChange={handleInput}
          className="inputSignIn"
          type="email"
          id="email"
          placeholder="nombre.apellidos@mail.com"
          name='email'
          required
        />

        <label
          htmlFor="password"
          className="labelSignIn"
          
        >
          Password
        </label>
        <input onChange={handleInput} className="inputSignIn" type="password" id="password" name='userpassword' />

        <input className="btn btnSignIn" type="submit" value="Registrarse"></input>
      </form>
     
    </main>
  );
}

export default Register;
