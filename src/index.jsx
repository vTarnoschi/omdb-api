import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./GlobalStyle.css";

import configureStore from "./Store";

import GlobalProvider from "./Context";

import MainApp from "./Containers/MainApp";

const root = document.getElementById("root");
ReactDOM.render(
  <Provider store={configureStore()}>
    <GlobalProvider>
      <MainApp />
    </GlobalProvider>
  </Provider>,
  root
);
