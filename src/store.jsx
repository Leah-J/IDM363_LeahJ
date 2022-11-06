import { useEffect } from "react";
import { createContext, useState } from "react";
import { collection, onSnapshot, query, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase/firestore";

export const StateContext = createContext({
  decks: [],
  setDecks: (data) => {},
  sendChanges: (deck) => {},
});

let localState = {
  decks: [],
  setDecks: (data) => {},
  sendChanges: (deck) => {},
};

export const StateContextProvider = ({ children }) => {
  useEffect(() => {
    let deckArray = [];
    localState = initialState;

    const q = query(collection(db, "decks"));
    onSnapshot(q, (querySnapshot) => {
      deckArray = [];
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

  const sendChanges = (deck) => {
    let changedDeck = { ...deck };
    delete changedDeck.keyName;
    setDoc(doc(db, "decks", deck.keyName), changedDeck);
  };

  const initialState = {
    decks: [],
    setDecks: setDecks,
    sendChanges: sendChanges,
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
