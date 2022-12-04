import { useEffect } from "react";
import { createContext, useState } from "react";
import { collection, onSnapshot, query, doc, setDoc } from "firebase/firestore";
import { db } from "./firebase/firestore";

export const StateContext = createContext({
  decks: [],
  userCart: [],
  addToCart: (name) => {},
  removeFromCart: (name) => {},
  removeAllFromCart: (name) => {},
  checkout: () => {},
  setUserCart: (cart) => {},
  setDecks: (data) => {},
  sendChanges: (deck) => {},
});

let localState = {
  decks: [],
  userCart: [],
  addToCart: (name) => {},
  removeFromCart: (name) => {},
  removeAllFromCart: (name) => {},
  checkout: () => {},
  setUserCart: (cart) => {},
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
      initializeCart();
    });

    //eslint-disable-next-line
  }, []);

  const initializeCart = () => {
    const shoppingCart = localState.decks.map((deck) => ({
      ...deck,
      in_cart: 0,
    }));

    setUserCart(shoppingCart);
  };

  const setUserCart = (cart) => {
    localState.userCart = cart;
    setState({ ...localState });
  };

  const addToCart = (name) => {
    const cart = localState.userCart;
    cart.forEach((deck) => {
      if (deck.name === name) deck.in_cart++;
    });

    setUserCart(cart);
  };

  const removeFromCart = (name) => {
    const cart = localState.userCart;
    cart.forEach((deck) => {
      if (deck.name === name) deck.in_cart--;
    });

    setUserCart(cart);
  };

  const removeAllFromCart = (name) => {
    const cart = localState.userCart;
    cart.forEach((deck) => {
      if (deck.name === name) deck.in_cart = 0;
    });

    setUserCart(cart);
  };

  const checkout = () => {
    const cart = localState.userCart;
    cart.forEach((deck) => {
      deck.in_cart = 0;
    });

    setUserCart(cart);
  };

  const setDecks = (data) => {
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
    userCart: [],
    removeFromCart: removeFromCart,
    removeAllFromCart: removeAllFromCart,
    checkout: checkout,
    addToCart: addToCart,
    setUserCart: setUserCart,
    setDecks: setDecks,
    sendChanges: sendChanges,
  };

  const [state, setState] = useState(initialState);

  // useEffect(() => {
  //   console.log(state);
  //   console.log(state.decks);
  //   console.log(state.userCart);
  // }, [state]);

  return (
    <StateContext.Provider value={state}>{children}</StateContext.Provider>
  );
};

export default StateContext;
