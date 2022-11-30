import Layout from "../layouts/Layout";
import "../../index.css";
import { useContext } from "react";
import { StateContext } from "../../store";
import CartItemCard from "../cartitems/CartItemCard";

const Cart = ({ children }) => {
  const state = useContext(StateContext);

  const { format } = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  let userCart = state.userCart;

  let total = 0.0;
  return (
    <>
      <Layout>
        <div className="d-flex justify-content-center">
          <h1 className="pt-1">Cart</h1>
        </div>

        {!userCart.length ? (
          <p>Cart is empty</p>
        ) : (
          <div>
            {userCart.map(({ name, price, in_cart }, index) => {
              total += price * in_cart;
              if (in_cart) {
                return (
                  <CartItemCard
                    name={name}
                    price={price}
                    in_cart={in_cart}
                    key={name}
                  />
                );
              }
              return null;
            })}
          </div>
        )}
        <div>
          <h2>{format(total)}</h2>
        </div>
      </Layout>
    </>
  );
};

export default Cart;
