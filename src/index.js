import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./app.css";
// import App from './app';
import "@fortawesome/fontawesome-free/js/all.js";
import SimpleHabit from "./conponents/simpleHabit";

ReactDOM.render(
  <React.StrictMode>
    <SimpleHabit />
  </React.StrictMode>,
  document.getElementById("root")
);
