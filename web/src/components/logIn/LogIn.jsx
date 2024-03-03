import PropTypes from 'prop-types';
import '../../scss/layout/Main.scss';
import '../../scss/layout/Btn.scss';
import '../../scss/layout/LogIn.scss';

function LogIn({ handleLogData, handleSubmitLog, loginError }) {

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
      <div className={`loginMessage ${loginError}`}>
        <p>El usuario o la contraseña no son correctos. Revise los datos introducidos por favor.</p>
      </div>
    </main>
  );
}
LogIn.propTypes = {
  handleLogData: PropTypes.func.isRequired,
  handleSubmitLog: PropTypes.func.isRequired,
  loginError: PropTypes.string.isRequired
};
export default LogIn;
