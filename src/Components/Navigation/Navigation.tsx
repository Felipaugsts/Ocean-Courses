import "./navigation.css";
import logo from "../../Assets/Logo/logo.png";
import "bootstrap-icons/font/bootstrap-icons.css";

function Navigation() {
  return (
    <div className="navigation">
      <div className="navigation-bar">
        <img className="navigation-logo" src={logo} />

        <div className="navigation-option dark-blue w-normal">
          <p>Trilhas</p>
          <p>Cursos</p>
          <p>Agenda</p>
        </div>

        <p className="dark-blue w-bold">Entrar/Cadastrar</p>
      </div>

      <div className="icon-wrapper">
        <i className="icon bi bi-list"></i>
      </div>
    </div>
  );
}

export default Navigation;
