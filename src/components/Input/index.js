import "./style.css";

const Input = (props) => {
  return (
    <label className="label">
      {props.children}
      <input
	    ref={props.register}
        name={props.name}
        className={`input ${props.className}`}
        type={props.type}
        placeholder={props.placeholder}
      />
    </label>
  );
};

export default Input;
