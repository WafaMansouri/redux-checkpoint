import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";
import AlertReducer from "./AlertReducer";

export default combineReducers({ CounterReducer, AlertReducer });
