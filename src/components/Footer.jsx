import "../App.css";
import { LinkContainer } from "react-router-bootstrap";

const Footer = ({ children }) => {
  return (
    <>
      <footer className="footer">
        <LinkContainer to="/admin">
          <p>admin</p>
        </LinkContainer>
      </footer>
    </>
  );
};

export default Footer;
