import Layout from "../layouts/Layout";
import "../../index.css";
import { useEffect } from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import StateContext from "../../store";
import { useState } from "react";
import "./css/ItemPage.css";
import { Button } from "react-bootstrap";

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
          <img
            src={"../deckimages/" + deckData.keyName + ".webp"}
            alt={"Image of " + deckData.name + " deck box."}
            className="align-self-center item-image"
          />
          <div>
            <h2 className="ps-2">{deckData.name}</h2>
            <p>{deckData.longdesc}</p>
            <Button
              variant="primary"
              onClick={() => state.addToCart(deckData.name)}
            >
              Add to cart: {deckData.price}
            </Button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ItemPage;
