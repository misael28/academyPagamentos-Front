import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../components/login/login.js";
import Cadastro from "../components/cadastro/cadastro.js";
import Home from "../components/home/home";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/cadastro" exact component={Cadastro} />
	<Route path="/home" exact component={Home}/>
  </Switch>
);

export default Routes;
