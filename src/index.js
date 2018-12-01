import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./store/configureStore";
import * as serviceWorker from "./serviceWorker";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));

serviceWorker.unregister();
