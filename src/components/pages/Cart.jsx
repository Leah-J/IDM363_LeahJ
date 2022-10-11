import Layout from "../layouts/Layout";
import "../../index.css";

const Cart = ({ children }) => {
  return (
    <>
      <Layout>
        <body>{children}</body>
      </Layout>
    </>
  );
};

export default Cart;
