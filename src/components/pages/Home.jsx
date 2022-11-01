import Layout from "../layouts/Layout";
import Button from "react-bootstrap/Button";
//import { useEffect, useState } from "react";
import LinkContainer from "react-router-bootstrap/LinkContainer";
import "./css/Home.css";
import bg from "./bgCrop.jpg";

const Home = ({ children }) => {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("home mounted");
  //   setCount(0);
  // }, []);

  return (
    <>
      <Layout>
        <div>
          <div className="header-content d-flex justify-content-center">
            <h1 className="text-center fw-bold text-white header-text px-3 py-3 rounded-2">
              Welcome to Undercity Cards!
            </h1>
          </div>
          <img src={bg} className="header-image" alt="Background" />
        </div>
        <div className="text-center">
          <div>
            <LinkContainer to="/about">
              <Button
                variant="dark"
                // onClick={() => {
                //   setCount(count + 1);
                // }}
              >
                About Us
              </Button>
            </LinkContainer>
          </div>
          <div className="py-2">
            <LinkContainer to="/shop">
              <Button variant="primary">Explore Decks</Button>
            </LinkContainer>
          </div>
          {/* <p>Count is: {count}</p> */}
          {children}
        </div>
      </Layout>
    </>
  );
};

export default Home;
