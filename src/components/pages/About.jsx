import Layout from "../layouts/Layout";
import "../../index.css";

const About = ({ children }) => {
  return (
    <>
      <Layout>
        <body>{children}</body>
      </Layout>
    </>
  );
};

export default About;
