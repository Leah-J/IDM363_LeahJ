import Layout from "../layouts/Layout";

const Home = ({ children }) => {
  return (
    <>
      <Layout>
        <body>{children}</body>
      </Layout>
    </>
  );
};

export default Home;
