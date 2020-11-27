import "./style.css";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Input from "../../components/Input";

const RecoveryPassword = () => {
  return (
    <>
      <div className="container">
        <Card>
          <form className="form">
            <p className="recovery-text">
              Informe o e-mail associado a sua conta e vamos te enviar
              instruções para resetar sua senha.
            </p>
            <Input type="email" placeholder="example@gmail.com">
              Email
            </Input>
            <Button type="submit" onClick={() => {}}>
              Recuperar senha
            </Button>
          </form>
        </Card>
      </div>
    </>
  );
};

export default RecoveryPassword;
