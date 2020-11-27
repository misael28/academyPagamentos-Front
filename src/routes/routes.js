import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../containers/Login/index.js";
import Cadastro from "../containers/Cadastro/index.js";
import Home from "../containers/Home";
import Clientes from "../containers/Clientes";
import Cobranca from "../containers/Cobranca";

import RecoveryPassword from "../containers/RecoveryPassword/index.js";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/cadastro" exact component={Cadastro} />
    <Route path="/home" exact component={Home} />
    <Route path="/clientes" exact component={Clientes} />
    <Route path="/cobranca" exact component={Cobranca} />
    <Route path="/recovery" exact component={RecoveryPassword} />
  </Switch>
);

export default Routes;
