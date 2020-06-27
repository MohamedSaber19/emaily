import React from "react";
import axios from "axios";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import reduxThunk from "redux-thunk";
import "materialize-css/dist/css/materialize.min.css";

import App from "./components/App";

window.axios = axios;
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

console.log("stripe key: ", process.env.REACT_APP_STRIPE_KEY);
console.log("node env: ", process.env.NODE_ENV);
