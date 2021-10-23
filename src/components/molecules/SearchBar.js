import React from "react";
import { Button, Form } from "react-bootstrap";

const SearchBar = () => {
  return (
    <div>
      <Form>
        <Form.Label>Find great places to holiday</Form.Label>
        <Form.Group className="d-flex">
          <Form.Control size="lg" type="text" style={{ width: "1100px" }} />
          <Button variant="warning" size="lg">
            Search
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SearchBar;
