import Layout from "../layouts/Layout";
import "../../index.css";

const Shop = ({ children }) => {
  return (
    <>
      <Layout>
        <body>{children}</body>
      </Layout>
    </>
  );
};

export default Shop;
