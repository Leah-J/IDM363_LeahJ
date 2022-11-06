import Layout from "../layouts/Layout";
import Sidebar from "../shopitems/Sidebar";
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
  // return (
  //   <>
  //     <Layout>
  //       <div>
  //         <h1>Time to do admin sh*t let's go?</h1>
  //       </div>
  //       {children}
  //     </Layout>
  //   </>
  // );
};

export default Admin;
