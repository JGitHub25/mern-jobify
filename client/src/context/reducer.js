import {
  ALERT_DANGER,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  TOGGLE_SIDEBAR,
  LOGOUT_USER
} from "./actions";
import { initialState } from "./appContext";

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
    case LOGIN_USER_BEGIN:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        token: action.payload.token,
        userLocation: action.payload.location,
        jobLocation: action.payload.location,
        showAlert: true,
        alertType: "success",
        alertText: `Welcome back ${action.payload.user.name.toUpperCase()}! Taking you to your dashboard!...`,
      };
    case LOGIN_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "danger",
        alertText: action.payload.msg,
      };
    case TOGGLE_SIDEBAR:
      return {
        ...state, showSidebar: !state.showSidebar
      };
    case LOGOUT_USER:
      return {
        ...initialState, user: null, token: null, userLocation: '', jobLocation: ''
      };
    default:
      throw new Error(`no such action: ${action.type}`);
  }
};
