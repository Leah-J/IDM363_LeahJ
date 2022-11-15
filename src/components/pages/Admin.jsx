import Layout from "../layouts/Layout";
import { Row, Col } from "react-bootstrap";
import { StateContext } from "../../store";
import { useContext } from "react";
import Form from "../Form";

const Admin = ({ children }) => {
  const state = useContext(StateContext);
  let decks = state.decks;
  // let decks = customData.decks; //Array of Decks from JSON

  const cards = decks.map((deck) => (
    <Col key={deck.keyName}>
      <Form deck={deck} />
    </Col>
  ));

  return (
    <>
      <Layout>
        <div>
          <Row lg={3}>{cards}</Row>
          {children}
        </div>
      </Layout>
    </>
  );
};

export default Admin;
