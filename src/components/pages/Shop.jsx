import Layout from "../layouts/Layout";
import "../../index.css";
import ShopItemCard from "../shopitems/ShopItemCard";
//import Sidebar from "../shopitems/Sidebar";
import { StateContext } from "../../store";
import { useContext } from "react";

const Shop = ({ children }) => {
  // const customData = require("../../data/decks.json");

  const state = useContext(StateContext);
  let decks = state.decks;
  // let decks = customData.decks; //Array of Decks from JSON

  const cards = decks.map(
    (decks = ({ name, description, price, keyName }) => (
      <div key={keyName} className="col-auto justify-content-center m-1">
        <ShopItemCard
          name={name}
          desc={description}
          price={"Add to cart: $" + price}
          source={"./deckimages/" + keyName + ".webp"}
          id={keyName}
        />
      </div>
    ))
  );

  return (
    <>
      <Layout>
        {/* <Sidebar /> */}
        <div className="d-flex justify-content-center">
          <div className="row justify-content-center m-2 w-75 g-4">{cards}</div>
          {children}
        </div>
      </Layout>
    </>
  );
};

export default Shop;
