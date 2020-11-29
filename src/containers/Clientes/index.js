import "./style.css";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Button from "../../components/Button";
const Clientes = () => {
  return (
    <div className="container-clientes">
      <Sidebar>
        <Button>Gerar Cobranças</Button>
      </Sidebar>
      <main>
        <Header>200,00</Header>
      </main>
    </div>
  );
};

export default Clientes;
