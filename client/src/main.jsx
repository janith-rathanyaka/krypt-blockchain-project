import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TransactionContext } from "./context/TransactionContext";

ReactDOM.render(
  <TransactionContext>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    ,
  </TransactionContext>,
  document.getElementById("root")
);
