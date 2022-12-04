import Layout from "../layouts/Layout";
import "../../index.css";
import { useContext } from "react";
import { StateContext } from "../../store";
import CartItemCard from "../cartitems/CartItemCard";
import { Row, Col, Container, Card, Button, ListGroup } from "react-bootstrap";

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

        {total ? (
          <h3 className="text-center pt-4">Cart is empty</h3>
        ) : (
          <>
            <Container>
              <Row>
                <Col>
                  <div className="ps-4">
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
                </Col>
                <Col>
                  <Card
                    style={{ width: "18rem" }}
                    className="justify-content-center"
                  >
                    <Card.Header>Checkout</Card.Header>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>SubTotal: {format(total)}</ListGroup.Item>
                      <ListGroup.Item>
                        Tax: {format(total * 0.06)}
                      </ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                      <Card.Title>
                        Total: {format(total + total * 0.06)}
                      </Card.Title>
                      <Button
                        variant="primary"
                        onClick={() => {
                          state.checkout();
                          alert("Thanks for giving me your money!");
                        }}
                      >
                        Checkout
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </>
        )}
      </Layout>
    </>
  );
};

export default Cart;
