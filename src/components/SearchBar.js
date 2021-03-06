import React from "react";
import { Button, Form } from "react-bootstrap";

const SearchBar = (props) => {
  const handleOnChange = (e) => {
    props.setSearch(e.target.value);
  };

  return (
    <div>
      <Form>
        <Form.Label>Find great places to holiday</Form.Label>
        <Form.Group className="d-flex">
          <Form.Control
            onChange={handleOnChange}
            size="lg"
            type="text"
            style={{ width: "1100px" }}
          />
          <Button style={{ color: "white" }} variant="warning" size="lg">
            <b> Search </b>
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default SearchBar;
