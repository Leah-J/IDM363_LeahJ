import { createContext } from "react";

export const state = {
  collection: {
    decks: [],
  },
};

const StateContext = createContext(state);

export default StateContext;
