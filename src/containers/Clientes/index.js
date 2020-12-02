import "./style.css";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Button from "../../components/Button";
import InputButton from "../../components/InputButton";
import check from "../../assets/check.png";
import email from "../../assets/email.png";
import phone from "../../assets/phone.png";
const Clientes = () => {
  return (
    <div className="container-clientes">
      <Sidebar>
        <Button>Gerar Cobranças</Button>
      </Sidebar>
      <main>
        <Header>200,00</Header>
        <div className="busca">
          <InputButton />
        </div>

        <table>
          <thead className="estilo-thead">
            <tr>
              <th>Cliente</th>
              <th>Cobranças Feitas</th>
              <th>Cobranças Recebidas</th>
              <th>Status</th>
              <th><div></div></th>
            </tr>
          </thead>
          <tbody className="estilo-tbody">
            <tr>
              <td>
                <p>Joana da silva</p>
                <p>
                  <img src={email} alt="mail" />
                  joanasilva@email.com
                </p>
                <p><img src={phone} alt="phone"/>(071)99999-0000</p>
              </td>
              <td>10000,00</td>
              <td>10000,00</td>
              <td>Em dia</td>
              <td>
                <img src={check} alt="imprimir" />
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Clientes;
