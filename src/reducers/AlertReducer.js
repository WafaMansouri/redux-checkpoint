import { ALERT_MESSAGE } from "../actions/types";

const initialState = {
  //   count: 0,
  alerts: "",
};
const AlertReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALERT_MESSAGE:
      return {
        ...state,
        alerts: `Count should be less than ${action.payload}`,
      };
    case "NO_MESSAGE":
      return { ...state, alerts: "" };
    default:
      return state;
  }
};
export default AlertReducer;
