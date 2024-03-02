import PropTypes from 'prop-types';


import '../../scss/layout/Main.scss';
import '../../scss/layout/Btn.scss';
import '../../scss/layout/LogIn.scss';

function LogIn({ handleLogData, handleSubmitLog }) {
  

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
          name="email"
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
          name="userpassword"
        />
        
          <input
            className="btn btnLogIn"
            type="submit"
            value="Enviar"
          ></input>
        
      </form>
    </main>
  );
}
LogIn.propTypes = {
  handleLogData: PropTypes.func.isRequired,
  handleSubmitLog: PropTypes.func.isRequired,

};
export default LogIn;
