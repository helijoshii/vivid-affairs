import { createContext, useContext, useMemo, useReducer } from "react";

export const ThemeContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE_TAB":
      return { ...state, activeTab: action.payload };
    default:
      return state;
  }
};

const ThemeContextProvider = ({ children }) => {
  const initialState = { activeTab: "contact" };
  const [controller, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      "useThemeContext must be used within a ThemeContextProvider"
    );
  }
  return context;
};

export const setActiveTab = (dispatch, tab) => {
  dispatch({ type: "SET_ACTIVE_TAB", payload: tab });
};

export default ThemeContextProvider;
