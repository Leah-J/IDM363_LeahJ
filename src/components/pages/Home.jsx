import Layout from "../layouts/Layout";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";

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
          <Button
            variant="primary"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Count
          </Button>
          <p>Count is: {count}</p>
          {children}
        </body>
      </Layout>
    </>
  );
};

export default Home;
