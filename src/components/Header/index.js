import incone from "../../assets/incone.png";
import "./style.css";
import deslog from "../../assets/log-out.png";
const Header = (props) => {
  return (
    <div className="header-container">
      <div className="card-saldo">
        <p>$ Saldo em conta</p>
        <h1>R$ {props.children}</h1>
      </div>
      <div className="deslogar">
        <img className="deslogar-incone" src={incone} alt="incone" />
        <button>
          <img src={deslog} alt="deslogar" />
          Deslogar
        </button>
      </div>
    </div>
  );
};

export default Header;
