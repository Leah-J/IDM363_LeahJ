import Header from "../Header";
import SiteNav from "../SiteNav";
import Footer from "../Footer";
import "../../App.css";

const Layout = ({ children }) => {
  return (
    <>
      <SiteNav />
      <Header></Header>
      <div className="page-container">{children}</div>
      <Footer></Footer>
    </>
  );
};

export default Layout;
