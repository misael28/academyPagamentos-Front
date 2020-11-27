import React, { useState } from "react";
import "./style.css";
import HiddenPassword from "../../assets/olhinhoFechado.png";
import ShowPassword from "../../assets/olhinhoAberto.png";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Login = () => {
  const [hiddenPassword, setHiddenPassword] = useState("false");

  return (
    <div className="container">
      <Card>
        <form className="form">
          <Input type="email" placeholder="example@gmail.com">
            Email
          </Input>
          <Input type={hiddenPassword ? "password" : "text"}>
            Senha
            <button
              type="button"
              onClick={() => {
                setHiddenPassword(!hiddenPassword);
              }}
              className="mostrarSenha"
            >
              <img
                src={hiddenPassword ? HiddenPassword : ShowPassword}
                alt={hiddenPassword ? "exibir senha" : "esconder senha"}
              />
            </button>
          </Input>
          <div className="forget">
            <Link to="/recovery">Esqueci minha senha</Link>
          </div>
          <Link to="/home">
            <Button type="submit">Entrar</Button>
          </Link>

          {/*<Button type="submit" onClick={() => {handleSubmit}}>
            Entrar
			</Button>*/}
        </form>
      </Card>
      <p>
        Não tem uma conta?
        <Link to="/cadastro">Cadastre-se</Link>
      </p>
    </div>
  );
};

export default Login;
