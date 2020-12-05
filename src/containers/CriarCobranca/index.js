import "./style.css";

import CardCobranca from "../../components/CardCobranca";
import Sidebar from "../../components/Sidebar";
import Button from "../../components/Button";
import Input from "../../components/Input";

const CriarCobranca = () => {
  return (
    <div className="container-home">
      <Sidebar />
      <main className="home-main-cobranca">
        <CardCobranca>
          <h3>// CRIAR COBRANÇA</h3>
          <div className="criar-cobranca-content">
            <label>
              Cliente
              <Input />
            </label>
            <label>
              Descrição
              <Input />
            </label>
            <div>
              <label>
                Valor
                <Input />
              </label>
              <label>
                Vencimento
                <Input />
              </label>
            </div>
          </div>
          <div className="button-cobranca">
            <Button>Cancelar</Button>
            <Button>Criar Cobrança</Button>
          </div>
        </CardCobranca>
      </main>
    </div>
  );
};

export default CriarCobranca;
