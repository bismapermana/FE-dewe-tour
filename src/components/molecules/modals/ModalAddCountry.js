import React, { useState } from "react";
import { Modal, Form, Button, Alert } from "react-bootstrap";
import { API } from "../../../config/api";
import "./Modals.css";

const ModalAddCountry = (props) => {
  const [form, setForm] = useState({ name: "" });
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState([]);

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await API.post("/country", form, config);
      console.log(response);
      props.handleCloseModal();
    } catch (error) {
      console.log(error.response.data.message);
      setErrorMessage(error.response.data);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  return (
    <div>
      <Modal
        show={props.showModalCountry}
        centered
        onHide={props.handleCloseModal}
      >
        <Modal.Body>
          {error && (
            <Alert variant="danger" style={{ height: "50px" }}>
              <p>{errorMessage.message}</p>
            </Alert>
          )}
          <Form>
            <input
              className="w-100 mb-2 p-2 form-input form-style"
              type="text"
              name="name"
              onChange={handleOnChange}
            />
          </Form>
          <Button
            variant="warning"
            className="w-100"
            style={{ color: "white" }}
            onClick={handleOnSubmit}
          >
            <b>Submit</b>
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalAddCountry;
