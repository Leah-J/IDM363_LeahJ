import SiteNav from "../SiteNav";
import Footer from "../Footer";
import "../../App.css";

const Layout = ({ children }) => {
  return (
    <>
      <SiteNav />
      <div className="page-container">{children}</div>
      <Footer></Footer>
    </>
  );
};

export default Layout;
