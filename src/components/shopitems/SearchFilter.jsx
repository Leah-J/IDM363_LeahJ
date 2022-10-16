import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";

const SearchFilter = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("home mounted");
    setSearch("");
  }, []);

  const onSubmit = () => {
    console.log(search);
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicSearch">
          <Form.Label>Search for:</Form.Label>
          <Form.Control type="search" placeholder="Search for..." />
        </Form.Group>
      </Form>
    </>
  );
};

export default SearchFilter;
