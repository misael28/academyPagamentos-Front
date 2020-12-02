import search from "../../assets/search.png";
import "./style.css";
const InputButton = () => {
  return (
    <div className="container-busca">
      <input
        className="input-button-search-i"
        placeholder="Buscar por Nome, CPF ou Email"
      />

      <button className="input-button-search">
        <div>
          <img src={search} alt="search" />
          BUSCAR
        </div>
      </button>
    </div>
  );
};

export default InputButton;
