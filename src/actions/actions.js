import { ALERT_MESSAGE, INCREMENT, DECREMENT } from "./types";
export const decrement = (step) => {
  return {
    type: DECREMENT,
    payload: step,
  };
};

export const increment = (step) => {
  return {
    type: INCREMENT,
    payload: step,
  };
};
export const alertMessage = (step) => {
  return {
    type: ALERT_MESSAGE,
    payload: step,
  };
};
