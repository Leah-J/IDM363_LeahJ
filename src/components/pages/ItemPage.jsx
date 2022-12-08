import Layout from "../layouts/Layout";
import "../../index.css";
import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import StateContext from "../../store";
import { useState } from "react";
import "./css/ItemPage.css";
import { Button, Card, Row, Col, Container } from "react-bootstrap";

const ItemPage = ({ children }) => {
  const state = useContext(StateContext);
  const { id } = useParams();
  const [deckData, setDeckData] = useState(null);

  useEffect(() => {
    setDeckData(state.decks.find((deck) => deck.keyName === id));
    console.log(id);
  }, [state]);

  if (!deckData && state.decks.length > 0) {
    return (
      <>
        <Layout>
          <h2 className="ps-2">Deck not found!</h2>
        </Layout>
      </>
    );
  }
  if (!deckData && state.decks.length === 0) {
    return (
      <>
        <Layout>
          <h2 className="ps-2">Loading...</h2>
        </Layout>
      </>
    );
  }
  return (
    <>
      <Layout>
        <div className="d-flex pt-2">
          <Container>
            <Row>
              <Col sm={4}>
                <Card style={{ width: "21rem" }}>
                  <Card.Img
                    variant="top"
                    style={{ width: "20rem" }}
                    src={"../deckimages/" + deckData.keyName + ".webp"}
                  />
                  {/* <img
                    src={"../deckimages/" + deckData.keyName + ".webp"}
                    alt={"Image of " + deckData.name + " deck box."}
                    className="align-self-center item-image"
                  /> */}
                </Card>
              </Col>
              <Col sm={8}>
                <div>
                  <Card className="justify-content-center mt-4">
                    <Card.Body>
                      <Card.Title>{deckData.name}</Card.Title>
                      <Card.Text>{deckData.longdesc}</Card.Text>
                      <Button
                        variant="dark"
                        onClick={() => state.addToCart(deckData.name)}
                      >
                        Add to cart: {deckData.price}
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Layout>
    </>
  );
};

export default ItemPage;
