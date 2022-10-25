import Layout from "../layouts/Layout";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import LinkContainer from "react-router-bootstrap/LinkContainer";

const Home = ({ children }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("home mounted");
    setCount(0);
  }, []);

  return (
    <>
      <Layout>
        <body>
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
        </body>
      </Layout>
    </>
  );
};

export default Home;
