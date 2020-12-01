import "./style.css";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Button from "../../components/Button";
import printer from "../../assets/printer.png";
const Cobranca = () => {
  return (
    <div className="container-cobranca">
      <Sidebar>
        <Button>Gerar Cobranças</Button>
      </Sidebar>
      <main>
        <Header>200,00</Header>
        <table>
          <thead className="estilo-thead">
            <tr>
              <th>Cliente</th>
              <th>Descrição</th>
              <th>Valor</th>
              <th>Status</th>
              <th>Vencimento</th>
              <th>Boleto</th>
            </tr>
          </thead>
          <tbody className="estilo-tbody">
            <tr>
              <td>Joana</td>
              <td>Curso Front</td>
              <td>10000,00</td>
              <td>Pago</td>
              <td>12/10/2020</td>
              <td>
                <img src={printer} alt="imprimir" />
              </td>
            </tr>
            <tr>
              <td>Joana</td>
              <td>Curso Front</td>
              <td>10000,00</td>
              <td>Pago</td>
              <td>12/10/2020</td>
              <td>
                <img src={printer} alt="imprimir" />
              </td>
            </tr>
            <tr>
              <td>Joana</td>
              <td>Curso Front</td>
              <td>10000,00</td>
              <td>Pago</td>
              <td>12/10/2020</td>
              <td>
                <img src={printer} alt="imprimir" />
              </td>
            </tr>
            <tr>
              <td>Joana</td>
              <td>Curso Front</td>
              <td>10000,00</td>
              <td>Pago</td>
              <td>12/10/2020</td>
              <td>
                <img src={printer} alt="imprimir" />
              </td>
            </tr>
            <tr>
              <td>Joana</td>
              <td>Curso Front</td>
              <td>10000,00</td>
              <td>Pago</td>
              <td>12/10/2020</td>
              <td>
                <img src={printer} alt="imprimir" />
              </td>
            </tr>
            <tr>
              <td>Joana</td>
              <td>Curso Front</td>
              <td>10000,00</td>
              <td>Pago</td>
              <td>12/10/2020</td>
              <td>
                <img src={printer} alt="imprimir" />
              </td>
            </tr>
            <tr>
              <td>Joana</td>
              <td>Curso Front</td>
              <td>10000,00</td>
              <td>Pago</td>
              <td>12/10/2020</td>
              <td>
                <img src={printer} alt="imprimir" />
              </td>
            </tr>
            <tr>
              <td>Joana</td>
              <td>Curso Front</td>
              <td>10000,00</td>
              <td>Pago</td>
              <td>12/10/2020</td>
              <td>
                <img src={printer} alt="imprimir" />
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Cobranca;
