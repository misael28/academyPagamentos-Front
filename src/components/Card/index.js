import "./style.css";
import logoTipo from "../../assets/academy.png";

const Card = (props) => {
  return (
    <div className="card">
      <img src={logoTipo} alt="logotipo" />
      {props.children}
    </div>
  );
};

export default Card;
