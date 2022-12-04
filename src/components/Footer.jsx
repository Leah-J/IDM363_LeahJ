import "../App.css";
import { LinkContainer } from "react-router-bootstrap";

const Footer = ({ children }) => {
  return (
    <>
      <footer className="footer ps-2 border bg-dark align-self-center">
        <LinkContainer to="/admin">
          <p className="text-white">Admin</p>
        </LinkContainer>
      </footer>
    </>
  );
};

export default Footer;
