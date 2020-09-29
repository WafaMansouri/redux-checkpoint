import { ALERT_MESSAGE, INCREMENT, DECREMENT, NO_MESSAGE } from "./types";
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
export const noMessage = () => {
  return {
    type: NO_MESSAGE,
  };
};
