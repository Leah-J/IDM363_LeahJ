import Form from "react-bootstrap/Form";

const SearchFilter = () => {
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
