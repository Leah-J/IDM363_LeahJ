import "../../index.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import StateContext from "../../store";
import { useContext } from "react";

const CartItemCard = ({ name, price, in_cart }) => {
  const state = useContext(StateContext);

  const { format } = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <>
      <Card style={{ width: "18rem" }} className="justify-content-center">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Quantity: {in_cart}, {format(price * in_cart)}
          </Card.Text>
          <Button variant="primary" onClick={() => state.removeFromCart(name)}>
            Remove One
          </Button>
          <Button
            variant="primary"
            onClick={() => state.removeAllFromCart(name)}
          >
            Remove All
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CartItemCard;
