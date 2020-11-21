import casa from "./home.png";
import users from "./users.png";
import money from "./carbon_money.png";
import "./nav.css";

const nav = () => {
  return (
    <>
      <div>
        <div className="home">
          <img src={casa} alt="home" />
          <label>HOME</label>
        </div>
        <div>
          <img src={money} alt="home" />
          <label>COBRANÇAS</label>
        </div>
        <div>
          <img src={users} alt="home" />
          <label>CLIENTES</label>
        </div>
      </div>
    </>
  );
};

export default nav;
