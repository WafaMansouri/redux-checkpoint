import rootReducer from "../reducers";
import { createStore, applyMiddleware, compose } from "redux";
import { alertMessage, noMessage } from "../actions/actions";

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
  } else if (
    action.payload === 5 &&
    store.getState().CounterReducer.count <= 20
  ) {
    store.dispatch({ type: "NO_MESSAGE" });
    next(action);
  } else if (
    action.payload === 10 &&
    store.getState().CounterReducer.count <= 100
  ) {
    store.dispatch(noMessage());
    next(action);
  } else next(action);
};
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(logger),
    applyMiddleware(alerts),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
