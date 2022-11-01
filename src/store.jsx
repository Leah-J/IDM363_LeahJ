import { useEffect } from "react";
import { createContext, useState } from "react";

export const StateContext = createContext({
  decks: [],
  setDecks: (data) => {},
});

export const StateContextProvider = ({ children }) => {
  const setDecks = (data) => {
    console.log("data", data);
    setState({
      ...state,
      ...data,
    });
  };

  const initialState = {
    decks: [],
    setDecks: setDecks,
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};

export default StateContext;
