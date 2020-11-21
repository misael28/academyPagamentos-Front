import boneco from "./boneco.png";

const dashboard = () => {
  return (
    <div>
      <div className="main">
        <div className="saldo">$ Saldo em conta R$ 0,00</div>
        <img src={boneco} alt="logar/deslogar" />
      </div>
    </div>
  );
};

export default dashboard;
