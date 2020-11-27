import React, { useState } from "react";
import "./style.css";
import HiddenPassword from "../../assets/olhinhoFechado.png";
import ShowPassword from "../../assets/olhinhoAberto.png";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Cadastro = () => {
  const [hiddenPassword, setHiddenPassword] = useState("false");
  return (
    <div className="container">
      <Card>
        <form className="form">
          <Input type="text" placeholder="Seu nome aqui">
            Nome
          </Input>
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
          <Button type="submit" onClick={() => {}}>
            Entrar
          </Button>
        </form>
      </Card>
      <p>
        Já possui uma conta?
        <Link to="/">Acesse agora!</Link>
      </p>
    </div>
  );
};

export default Cadastro;
