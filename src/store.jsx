import { useEffect } from "react";
import { createContext, useState } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "./firebase/firestore";

export const StateContext = createContext({
  decks: [],
  setDecks: (data) => {},
});

let localState = {
  decks: [],
  setDecks: (data) => {},
};

export const StateContextProvider = ({ children }) => {
  useEffect(() => {
    const deckArray = [];
    localState = initialState;

    const q = query(collection(db, "decks"));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(doc.id);
        // console.log(doc.data());
        const deckData = {
          keyName: doc.id,
          ...doc.data(),
        };
        deckArray.push(deckData);
      });
      setDecks(deckArray);
    });
  }, []);

  const setDecks = (data) => {
    // console.log("data", data);
    localState.decks = data;
    setState({
      ...localState,
    });
  };

  const initialState = {
    decks: [],
    setDecks: setDecks,
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    console.log(state);
    console.log(state.decks);
  }, [state]);

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};

export default StateContext;
