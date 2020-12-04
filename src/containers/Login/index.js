import React, { useState } from "react";
import "./style.css";
import HiddenPassword from "../../assets/olhinhoFechado.png";
import ShowPassword from "../../assets/olhinhoAberto.png";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import { LoginContainer } from "../../index";

const Login = () => {
  const [hiddenPassword, setHiddenPassword] = useState("false");
  const { register, handleSubmit } = useForm();
  const { login } = LoginContainer.useContainer();

  return (
    <div className="container">
      <Card>
        <form
          className="form"
          onSubmit={handleSubmit((data) => {
            const { email, senha } = data;
            login(email, senha);
          })}
        >
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
          <Button type="submit">Entrar</Button>
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
