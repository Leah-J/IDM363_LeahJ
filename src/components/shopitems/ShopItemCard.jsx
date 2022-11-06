import "../../index.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ShopItemCard = ({ name, desc, price, source }) => {
  return (
    <>
      <Card style={{ width: "18rem" }} className="justify-content-center">
        <Card.Img variant="top" src={source} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{desc}</Card.Text>
          <Button variant="primary">{price}</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ShopItemCard;
