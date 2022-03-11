import { createContext, useContext, useReducer } from "react";
import {
  ALERT_DANGER,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
} from "./actions";
import { reducer } from "./reducer";
import axios from "axios";

//get initial data from localStorage
const user = localStorage.user;
const token = localStorage.token;
const location = localStorage.location;

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token || null,
  userLocation: location || "",
  jobLocation: location || "",
};

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const alertDanger = () => {
    dispatch({ type: ALERT_DANGER });

    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.setItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("location");
  };

  const registerUser = async (userData) => {
    dispatch({ type: REGISTER_USER_BEGIN });

    try {
      const { data } = await axios.post("/api/v1/auth/register", userData);

      const { user, token, location } = data;

      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token, location },
      });

      //add tolocalStorage
      addUserToLocalStorage(data);
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  const loginUser = async (userData) => {
    dispatch({ type: LOGIN_USER_BEGIN });

    try {
      const { data } = await axios.post("api/v1/auth/login", userData);
      const { user, token, location } = data;

      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token, location },
      });

      addUserToLocalStorage(data);
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
    clearAlert();
  };

  return (
    <AppContext.Provider
      value={{ ...state, alertDanger, registerUser, loginUser }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
