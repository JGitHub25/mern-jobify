import {
  ALERT_DANGER,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from "./actions";

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
    case REGISTER_USER_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_USER_SUCCESS:
      const { user, token, location } = action.payload;
      return {
        ...state,
        isLoading: false,
        user,
        token,
        userLocation: location,
        jobLocation: location,
        showAlert: true,
        alertType: "success",
        alertText: "User created! Taking you to your dashboard!",
      };
    case REGISTER_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "danger",
        alertText: action.payload.msg,
      };
    default:
      throw new Error(`no such action: ${action.type}`);
  }
};
