import Header from "../Header";
import Nav from "../Nav";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Nav>This is a nav</Nav>
      <Header>This is a header</Header>
      {children}
      <Footer>This is a footer</Footer>
    </>
  );
};

export default Layout;
