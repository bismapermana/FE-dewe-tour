import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const AddForm = () => {
  return (
    <div>
      <Form style={{ width: "1204px", paddingTop: "20px", marginTop: "20px" }}>
        <Form.Group className="mb-3">
          <Form.Label>
            <b>Title Trip</b>
          </Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group>
          <Form.Label>
            <b>Country</b>
          </Form.Label>
          <Form.Control as="select">
            <option></option>
            <option value="1">Indonesia</option>
            <option value="2">Zimbabwe</option>
            <option value="3">Lesotho</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>
            <b>Accomodation</b>
          </Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>
            <b>Transportation</b>
          </Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label style={{ display: "" }}>
            <b>Eat</b>
          </Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Form>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control type="text" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Control type="text" />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default AddForm;
