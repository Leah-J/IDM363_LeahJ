import Layout from "../layouts/Layout";
import { StateContext } from "../../store";
import { useContext } from "react";
import Form from "../Form";

const Admin = ({ children }) => {
  const state = useContext(StateContext);
  let decks = state.decks;
  // let decks = customData.decks; //Array of Decks from JSON

  const cards = decks.map((deck) => (
    <div key={deck.keyName} className="col-auto justify-content-center m-1">
      <Form deck={deck} />
    </div>
  ));

  return (
    <>
      <Layout>
        <div className="d-flex justify-content-center">
          <div className="row justify-content-center m-4 w-60 g-6">{cards}</div>
          {children}
        </div>
      </Layout>
    </>
  );
};

export default Admin;
