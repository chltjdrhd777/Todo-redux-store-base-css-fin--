import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const DefaultBackground = createGlobalStyle`
  body{
    background-color: #ff7979;
    min-width:350px;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <DefaultBackground />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
