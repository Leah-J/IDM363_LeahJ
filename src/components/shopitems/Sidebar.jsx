import "../../index.css";
import "./sidebar.css";
import Button from "react-bootstrap/Button";
import SearchFilter from "./SearchFilter";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="filter-div">
          <h3>Filter</h3>
        </div>
        <SearchFilter />
        <div>
          <Button variant="primary">It's me, a button!</Button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
