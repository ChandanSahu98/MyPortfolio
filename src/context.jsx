import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const INITIAL_STATE = { darkmode: false };

const themereducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return { darkmode: !state.darkmode };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themereducer, INITIAL_STATE);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
