import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import configureStore from "./store/configureStore";
import * as serviceWorker from "./serviceWorker";

import { addExpense } from "./actions/expenses";
// import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

store.dispatch(addExpense({ description: "Water bill", amount: 4500 }));
store.dispatch(addExpense({ description: "Gas bill", createdAt: 1000 }));
store.dispatch(
  addExpense({ description: "Rent", amount: 109500, createdAt: 500 })
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));

serviceWorker.unregister();
