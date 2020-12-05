import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./main/App";
import reportWebVitals from "./reportWebVitals";

import { createContainer } from "unstated-next";

function UserLogin() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  function login(email, senha) {
    fetch("http://localhost:8081/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, senha }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.dados.token) {
          setToken(res.dados.token);
          localStorage.setItem("token", res.dados.token);
        }
      });
  }

  function logout() {
    setToken("");
    localStorage.clear();
  }

  return { token, login, logout };
}

export const LoginContainer = createContainer(UserLogin);

ReactDOM.render(
  <React.StrictMode>
    <LoginContainer.Provider>
      <App />
    </LoginContainer.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
