import "./style.css";
import logo from "../../assets/academy2.png";
import home from "../../assets/home.png";
import cobrancas from "../../assets/money.png";
import clientes from "../../assets/users.png";

import { NavLink } from "react-router-dom";
const Sidebar = () => {
  const menu = [
    {
      title: "HOME",
      patch: "/home",
    },
    {
      title: "COBRANCA",
      patch: "/cobranca",
    },
    {
      title: "CLIENTES",
      patch: "/clientes",
    },
  ];
  return (
    <nav>
      <img src={logo} alt="logo" />
      {menu.map((item) => (
        <NavLink to={item.patch} exact activeStyle={{ color: "palevioletred" }}>
          {item.title === "HOME" && <img src={home} alt="home" />}
          {item.title === "COBRANCAS" && (
            <img src={cobrancas} alt="cobrancas" />
          )}
          {item.title === "CLIENTES" && <img src={clientes} alt="clientes" />}

          {item.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Sidebar;
