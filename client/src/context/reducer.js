import { ALERT_DANGER, CLEAR_ALERT } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case ALERT_DANGER:
      return {
        ...state,
        showAlert: true,
        alertType: "danger",
        alertText: "Please provide all values",
      };
    case CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertType: "",
        alertText: "",
      };
    default:
      throw new Error(`no such action: ${action.type}`);
  }
};
