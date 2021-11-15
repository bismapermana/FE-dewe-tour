import React, { useState } from "react";
import { Modal, Button, Form, Image, Alert } from "react-bootstrap";
import palm from "../../../assets/palm.png";
import hibiscus from "../../../assets/hibiscus.png";
import { API } from "../../../config/api";

const ModalRegister = (props) => {
  const [errorAlert, setErrorAlert] = useState(false);
  const [successAlert, setSuccesAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [item, setItem] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const handleOnChange = (e) => {
    e.preventDefault();
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnRegister = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await API.post("/register", item, config);

      console.log(response);
      setItem({
        fullName: "",
        email: "",
        phone: "",
        address: "",
        password: "",
      });
      setSuccesAlert(true);
      setTimeout(() => {
        props.handleCloseRegister();
        setSuccesAlert(false);
      }, 3000);
    } catch (error) {
      const message = error.response.data.message;
      setErrorAlert(true);
      setErrorMessage(message);
      setTimeout(() => {
        setErrorAlert(false);
      }, 3000);
    }
  };

  return (
    <div>
      <Modal show={props.showRegister} onHide={props.handleCloseRegister}>
        <Image src={palm} className="background-palm" />
        <Image src={hibiscus} className="background-hibiscus" />
        <h1 className="text-center mt-4 text-modal-title">Sign Up</h1>
        <Modal.Body>
          {errorAlert && (
            <Alert variant="danger" style={{ height: "50px" }}>
              <p>{errorMessage}</p>
            </Alert>
          )}
          {successAlert && (
            <Alert variant="success" style={{ height: "50px" }}>
              <p>success</p>
            </Alert>
          )}
          <Form>
            <Form.Group className="mb-4">
              <p className="mb-1">
                <b>Full Name</b>
              </p>
              <input
                className="form-style w-100 rounded p-2 rounded form-input"
                type="text"
                name="fullName"
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="mb-4">
              <p className="mb-1">
                <b>Email</b>
              </p>
              <input
                className="form-style w-100 p-2 rounded form-input"
                type="email"
                name="email"
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <p className="mb-1">
                <b>Phone Number</b>
              </p>
              <input
                className="form-style w-100 p-2 rounded form-input"
                type="number"
                name="phone"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group>
              <p className="mb-1">
                <b>Address</b>
              </p>
              <input
                className="form-style w-100 p-2 rounded form-input"
                type="textarea"
                name="address"
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <p className="mb-1">
                <b>Password</b>
              </p>
              <input
                className="form-style w-100 p-2 rounded form-input"
                type="password"
                name="password"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Button
              variant="warning"
              onClick={handleOnRegister}
              className="w-100 mt-4 p-2 btn-style"
              style={{ color: "white" }}
            >
              <b>Sign up </b>
            </Button>
            <p className="text-center pt-3 text-modal">
              Already Have an Account? Click{" "}
              <b onClick={props.handleShowLogin} style={{ cursor: "pointer" }}>
                here
              </b>
            </p>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalRegister;
