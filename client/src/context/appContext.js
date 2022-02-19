import { createContext, useContext, useReducer } from "react";
import { ALERT_DANGER, CLEAR_ALERT } from "./actions";
import { reducer } from "./reducer";

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
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
    }, 2000);
  };

  return (
    <AppContext.Provider value={{ ...state, alertDanger }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
