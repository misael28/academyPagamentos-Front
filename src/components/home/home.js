import "./home.css";
import logoTipo from "./Logo2.png";
import Nav from "../nav/nav.js";
import Dashboard from "../dashboard/dashboard.js";

const home = () => {
  return (
    <>
      <div className="main">
        <div className="home-menu">
          <img src={logoTipo} alt="logo" />
          <Nav />
        </div>
        <Dashboard />
      </div>
    </>
  );
};

export default home;
