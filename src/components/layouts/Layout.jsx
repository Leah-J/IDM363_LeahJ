import Header from "../Header";
import SiteNav from "../SiteNav";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <>
      <SiteNav />
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
};

export default Layout;
