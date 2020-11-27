import "./style.css";

const Button = (props) => {
  return (
    <button
      className={`button ${props.className}`}
      type={props.type}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
