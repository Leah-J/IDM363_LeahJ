import "../../index.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { StateContext } from "../../store";
import { useContext } from "react";

const ShopItemCard = ({ name, desc, price, source }) => {
  const state = useContext(StateContext);
  const deckName = name;
  return (
    <>
      <Card style={{ width: "18rem" }} className="justify-content-center">
        <Card.Img variant="top" src={source} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <Button variant="primary" onClick={() => state.addToCart(deckName)}>
            {price}
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ShopItemCard;
