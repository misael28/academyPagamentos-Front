import "./style.css";

const ContentInsider = (props) => {
  return (
    <div className="content-insider" style={{ borderColor: props.borderColor }}>
	  <h3>{props.title}</h3>
     <h3>{props.value}</h3>
    </div>
  );
};

export default ContentInsider;
