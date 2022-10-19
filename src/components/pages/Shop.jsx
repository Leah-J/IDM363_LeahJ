import Layout from "../layouts/Layout";
import "../../index.css";
import ShopItemCard from "../shopitems/ShopItemCard";
import Sidebar from "../shopitems/Sidebar";
import { Row, Col } from "react-bootstrap";

const Shop = ({ children }) => {
  const customData = require("../../data/decks.json");

  let decks = customData.decks; //Array of Decks from JSON

  const cards = decks.map(
    (decks = ({ name, description, price, source }) => (
      <Col>
        <ShopItemCard
          name={name}
          desc={description}
          price={price}
          source={source}
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
