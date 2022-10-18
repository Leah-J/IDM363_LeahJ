import Layout from "../layouts/Layout";
import "../../index.css";
import ShopItemCard from "../shopitems/ShopItemCard";
import Sidebar from "../shopitems/Sidebar";

const Shop = ({ children }) => {
  const customData = require("../../data/decks.json");

  let decks = customData.decks;

  const cards = decks.map(
    (decks = ({ name, description, price, source }) => (
      <ShopItemCard
        name={name}
        desc={description}
        price={price}
        source={source}
      />
    ))
  );

  return (
    <>
      <Layout>
        <Sidebar />
        <div className="shopcontent">
          {cards}
          {children}
        </div>
      </Layout>
    </>
  );
};

export default Shop;
