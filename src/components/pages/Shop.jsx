import Layout from "../layouts/Layout";
import "../../index.css";
import ShopItemCard from "../shopitems/ShopItemCard";
import Sidebar from "../shopitems/Sidebar";
import { Row, Col } from "react-bootstrap";
import { StateContext } from "../../store";
import { useContext } from "react";

const Shop = ({ children }) => {
  // const customData = require("../../data/decks.json");

  const state = useContext(StateContext);
  let decks = state.decks;
  // let decks = customData.decks; //Array of Decks from JSON

  const cards = decks.map(
    (decks = ({ name, description, price, keyName }) => (
      <Col key={keyName}>
        <ShopItemCard
          name={name}
          desc={description}
          price={"Add to cart: $" + price}
          source={"./deckimages/" + keyName + ".webp"}
        />
      </Col>
    ))
  );

  return (
    <>
      <Layout>
        <Sidebar />
        <div className="shopcontent">
          <Row lg={3}>{cards}</Row>
          {children}
        </div>
      </Layout>
    </>
  );
};

export default Shop;
