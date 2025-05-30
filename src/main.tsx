import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app";

import "./style.css";
import "./global.css";


const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
