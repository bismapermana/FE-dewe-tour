import React, { useState } from "react";
import { Modal, Button, Form, Image } from "react-bootstrap";
import palm from "../../../assets/palm.png";
import hibiscus from "../../../assets/hibiscus.png";

const ModalRegister = (props) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const handleOnChange = (e) => {
    e.preventDefault();
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnRegister = (e) => {
    const users = [];
    const user = localStorage.getItem("user");
    const dataUsers = JSON.parse(user);

    if (dataUsers !== null) {
      users.push(...dataUsers);
    }

    users.push(data);
    localStorage.setItem("user", JSON.stringify(users));
    props.handleCloseRegister();
  };

  return (
    <div>
      <Modal show={props.showRegister} onHide={props.handleCloseRegister}>
        <Image src={palm} className="background-palm" />
        <Image src={hibiscus} className="background-hibiscus" />
        <h1 className="text-center mt-4 text-modal-title">Sign Up</h1>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-4">
              <p className="mb-1">
                <b>Full Name</b>
              </p>
              <input
                className="form-style w-100 py-2 rounded form-input"
                type="text"
                name="name"
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="mb-4">
              <p className="mb-1">
                <b>Email</b>
              </p>
              <input
                className="form-style w-100 py-2 rounded form-input"
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
                className="form-style w-100 py-2 rounded form-input"
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
                className="form-style w-100 py-2 rounded form-input"
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
                className="form-style w-100 py-2 rounded form-input"
                type="password"
                name="password"
                onChange={handleOnChange}
              />
            </Form.Group>

            <Button
              variant="warning"
              onClick={handleOnRegister}
              className="w-100 mt-4 py-2 btn-style"
            >
              Sign up
            </Button>
            <p className="text-center pt-3 text-modal">
              Don't Have an Account? Click <b>here</b>
            </p>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalRegister;
