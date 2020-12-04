import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

import Login from "../containers/Login/index.js";
import Cadastro from "../containers/Cadastro/index.js";
import Home from "../containers/Home";
import Clientes from "../containers/Clientes";
import Cobranca from "../containers/Cobranca";

import RecoveryPassword from "../containers/RecoveryPassword/index.js";

import { LoginContainer } from "../index";

export default function Routes() {
  const { token } = LoginContainer.useContainer();
  return (
    <BrowserRouter>
      {!token ? (
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/cadastro" exact component={Cadastro} />
          <Route path="/recovery" exact component={RecoveryPassword} />
          <Route path="*" render={() => <Redirect to="/" />} />
        </Switch>
      ) : (
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/clientes" exact component={Clientes} />
          <Route path="/cobranca" exact component={Cobranca} />
        </Switch>
      )}
    </BrowserRouter>
  );
}
