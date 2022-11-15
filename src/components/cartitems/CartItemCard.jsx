import "../../index.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CartItemCard = ({ name, price, in_cart }) => {
  const { format } = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <>
      <Card style={{ width: "18rem" }} className="justify-content-center">
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{format(price * in_cart)}</Card.Text>
          <Button variant="primary">Remove From Cart</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CartItemCard;
