import "./cadastro.css";
import logoTipo from "./academy.png";
import olhinhoAberto from "./olhinhoAberto.png";
import olhinhoFechado from "./olhinhoFechado.png";

const cadastro = () => {
  return (
    <div>
      <div className="container">
        <div className="container-centro">
          <img className="logo" src={logoTipo} alt="logotipo" />
          <form className="form">
            <div className="form-nome">
              <div className="form-1">Nome</div>
              <input />
              <div className="input-borda"></div>
            </div>
            <div className="email">
              <div className="form-1">Email</div>
              <input placeholder="exemplo@gmail.com" />
              <div className="input-borda"></div>
            </div>
            <div className="senha">
              <div className="form-1">Senha</div>
              <div className="senha-button">
                <input type="password" />
                <button className="password-button">
                  <img src={olhinhoFechado} alt="ocultarSenha" />
                </button>
              </div>
              <div className="input-borda"></div>
              <div>
                <a href="/">Esqueci minha senha</a>
              </div>
            </div>
          </form>

          <button>Criar Conta</button>
          <div className="cadastro">
            <p>
              Já possui uma conta?
              <span>
                <a href="../components/login/login">Acesse agora!</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cadastro;
