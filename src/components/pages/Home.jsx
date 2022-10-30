import Layout from "../layouts/Layout";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import LinkContainer from "react-router-bootstrap/LinkContainer";
import "./css/Home.css";
import bg from "./bg.jpg";

const Home = ({ children }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("home mounted");
    setCount(0);
  }, []);

  return (
    <>
      <Layout>
        <div>
          <h1 className="text-center fw-bold text-white header-content">
            Welcome to Undercity Cards!
          </h1>
          <img src={bg} className="header-image" alt="Background" />
        </div>
        <div>
          <LinkContainer to="/about">
            <Button
              variant="primary"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              Count
            </Button>
          </LinkContainer>
          <p>Count is: {count}</p>
          {children}
        </div>
      </Layout>
    </>
  );
};

export default Home;
