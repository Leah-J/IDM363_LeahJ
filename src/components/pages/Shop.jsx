import Layout from "../layouts/Layout";
import "../../index.css";
import ShopItemCard from "../shopitems/ShopItemCard";
import Sidebar from "../shopitems/Sidebar";

const Shop = ({ children }) => {
  return (
    <>
      <Layout>
        <Sidebar />
        <body>
          <div className="shopcontent">
            <ShopItemCard />
            {children}
          </div>
        </body>
      </Layout>
    </>
  );
};

export default Shop;
