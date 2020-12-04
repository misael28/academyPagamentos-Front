import React, { useState } from "react";
import "./style.css";
import HiddenPassword from "../../assets/olhinhoFechado.png";
import ShowPassword from "../../assets/olhinhoAberto.png";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";

function cadastro(nome, email, senha) {
  fetch("http://localhost:8081/usuarios", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nome, email, senha }),
  })
}

const Cadastro = () => {
  const [hiddenPassword, setHiddenPassword] = useState("false");
  const { register, handleSubmit } = useForm();

  return (
    <div className="container">
      <Card>
        <form
          className="form"
          onSubmit={handleSubmit((data) => {
			const { nome, email, senha } = data;
			console.log(data)
            cadastro(nome, email, senha);
          })}
        >
          <Input
            register={register}
            name="nome"
            type="text"
            placeholder="Seu nome aqui"
          >
            Nome
          </Input>
          <Input
            register={register}
            name="email"
            type="email"
            placeholder="example@gmail.com"
          >
            Email
          </Input>
          <Input
            register={register}
            name="senha"
            type={hiddenPassword ? "password" : "text"}
          >
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
          <Button type="submit">
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
