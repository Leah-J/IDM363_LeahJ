import Layout from "../layouts/Layout";
import "../../index.css";

const ItemPage = ({ children }) => {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
};

export default ItemPage;
