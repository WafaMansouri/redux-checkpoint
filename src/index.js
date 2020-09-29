import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import { alertMessage } from "./actions/actions";

const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  next(action);
  console.log("next state", store.getState());
};
const alerts = (store) => (next) => (action) => {
  if (action.payload === 1 && store.getState().CounterReducer.count >= 10) {
    store.dispatch(alertMessage(10));
  } else if (
    action.payload === 5 &&
    store.getState().CounterReducer.count >= 20
  ) {
    store.dispatch(alertMessage(20));
  } else if (
    action.payload === 10 &&
    store.getState().CounterReducer.count >= 100
  ) {
    store.dispatch(alertMessage(100));
  } else {
    next(action);
  }
};
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(logger),
    applyMiddleware(alerts),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
