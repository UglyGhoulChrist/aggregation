import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// ! StrictMode выполняет рендеринг компонентов дважды в development режиме, но не в production.

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
