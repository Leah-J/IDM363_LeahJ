import "../../index.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { StateContext } from "../../store";
import { useContext } from "react";
import LinkContainer from "react-router-bootstrap/LinkContainer";

const ShopItemCard = ({ name, desc, price, source, id }) => {
  const state = useContext(StateContext);
  const deckName = name;
  return (
    <>
      <Card
        style={{ width: "18rem" }}
        className="justify-content-center m-0 g-0"
      >
        <LinkContainer to={"/shop/" + id}>
          <Card.Img variant="top" src={source} />
        </LinkContainer>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <Button variant="dark" onClick={() => state.addToCart(deckName)}>
            {price}
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ShopItemCard;
