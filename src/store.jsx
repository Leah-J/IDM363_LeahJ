import { useEffect } from "react";
import { createContext, useState } from "react";

let localState = {
  setDecks: (data) => {},
  decks: [],
};

export const StateContext = createContext({
  decks: [],
  setDecks: (data) => {},
});

export const StateContextProvider = ({ children }) => {
  useEffect(() => {
    localState = initialState;
  }, []);

  const setDecks = (data) => {};

  const initialState = {
    decks: [],
    setDecks: setDecks,
  };

  const [state, setState] = useState(initialState);

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};

export default StateContext;
