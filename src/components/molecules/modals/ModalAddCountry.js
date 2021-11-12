import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { API } from "../../../config/api";
import "./Modal.css";

const ModalAddCountry = (props) => {
  const [form, setForm] = useState({ name: "" });

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  console.log(form);

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
      console.log(error);
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
