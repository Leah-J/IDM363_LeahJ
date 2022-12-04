import Layout from "../layouts/Layout";
import "../../index.css";

const About = ({ children }) => {
  return (
    <>
      <Layout>
        <div className="justify-content-center">
          <h2 className="text-center pt-3">What is this website?</h2>
          <p className="text-center">
            Undercity games is a class project for my IDM-363 class. This is not
            an actual shopping website, and all content on this website is used
            for educational purposes only.
          </p>
        </div>
      </Layout>
    </>
  );
};

export default About;
