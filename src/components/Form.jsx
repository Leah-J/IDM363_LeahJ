// Form.jsx

import { useContext } from "react";
import { useState } from "react";
import { StateContext } from "../store";

const Form = ({ deck }) => {
  const state = useContext(StateContext);
  console.log(deck);

  const [copyDeck, setCopyDeck] = useState({ ...deck });
  console.log(copyDeck);
  function handleInputChange(e) {
    console.log(e.target.name, e.target.value);
    setCopyDeck({
      ...copyDeck,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <form>
      <div className="control">
        <input
          name="name"
          onChange={handleInputChange}
          placeholder="Deck_Name"
          type="text"
          value={copyDeck.name}
        />
      </div>
      <div className="control">
        <input
          name="description"
          onChange={handleInputChange}
          placeholder="Deck_Description"
          type="text"
          value={copyDeck.description}
        />
      </div>
      <div className="control">
        <input
          name="price"
          onChange={handleInputChange}
          placeholder="Deck_Price"
          type="number"
          value={copyDeck.price}
        />
      </div>
    </form>
  );
};

export default Form;
