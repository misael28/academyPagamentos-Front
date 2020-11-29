import "./style.css";

import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Content from "../../components/Content";
import ContentInsider from "../../components/ContentInsider";
import ContentHeader from "../../components/ContentHeader";
import Button from "../../components/Button";
import clientes from "../../assets/users.png";
import money from "../../assets/money.png";
import fatura from "../../assets/fatura.png";

import { Line } from "react-chartjs-2";

const state = {
  labels: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
  datasets: [
    {
      label: "R$",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "#E83B86",
      borderColor: "#E83B86",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56, 40, 30, 30, 10, 10, 20, 20],
    },
  ],
};

const Home = () => {
  return (
    <div className="container-home">
      <Sidebar>
        <Button>Gerar Cobranças</Button>
      </Sidebar>
      <main className="home-main">
        <Header>200,00</Header>
        <Content>
          <ContentHeader>
            <div>
              <img src={clientes} alt="users" />
            </div>
            <h3>Clientes</h3>
          </ContentHeader>
          <ContentInsider>
            <h3>Em dias</h3>
            <h3>0</h3>
          </ContentInsider>
          <ContentInsider>
            <h3>Inadimplentes</h3>
            <h3>0</h3>
          </ContentInsider>
        </Content>
        <Content>
          <ContentHeader>
            <div>
              <img src={money} alt="users" />
            </div>
            <h3>Cobranças</h3>
          </ContentHeader>
          <ContentInsider>
            <h3>Inadimplentes</h3>
            <h3>0</h3>
          </ContentInsider>
          <ContentInsider>
            <h3>Inadimplentes</h3>
            <h3>0</h3>
          </ContentInsider>
          <ContentInsider>
            <h3>Inadimplentes</h3>
            <h3>0</h3>
          </ContentInsider>
        </Content>
        <Content>
          <ContentHeader>
            <div>
              <img src={fatura} alt="fatura" />
            </div>
            <h3>Faturamento</h3>
          </ContentHeader>
          <div>
            <Line
              data={state}
              height={500}
              width={850}
              options={{
                maintainAspectRatio: true,
                title: {
                  display: false,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </div>
        </Content>
      </main>
    </div>
  );
};

export default Home;
