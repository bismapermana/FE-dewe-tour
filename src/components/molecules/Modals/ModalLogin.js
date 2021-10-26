import React, { useState } from "react";
import { Modal, Form, Button, Image } from "react-bootstrap";
import { useHistory } from "react-router";
import "./Modal.css";
import palm from "../../../assets/palm.png";
import hibiscus from "../../../assets/hibiscus.png";

const ModalSignin = (props) => {
  const [item, setItem] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();

  const handleOnChange = (e) => {
    e.preventDefault();
    setItem({
      ...item,
      [e.target.name]: e.target.value,
    });
  };

  const handleIsLogin = (e) => {
    e.preventDefault();
    const getDatas = localStorage.getItem("user");
    const datas = JSON.parse(getDatas);
    const dataUser = datas?.find(
      (user) => user.email === item.email && user.password === item.password
    );

    if (dataUser) {
      props.dispatch({ type: "LOGIN_SUCCESS", payload: dataUser });
      props.handleCloseLogin();
      if (dataUser.name === "admin") {
        history.push("/list");
        props.handleCloseLogin();
      }
    } else {
      alert("Email or Password incorrect");
    }
  };

  return (
    <div>
      <Modal show={props.showLogin} onHide={props.handleCloseLogin}>
        <Modal.Title>
          <Image src={palm} className="background-palm" />
          <Image src={hibiscus} className="background-hibiscus" />
        </Modal.Title>
        <h1 className="text-center mt-4 text-modal-title">Sign In </h1>
        <Modal.Body>
          <Form onSubmit={handleIsLogin}>
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
              className="w-100 mt-4 py-2 btn-style"
              type="submit"
            >
              Sign In
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

export default ModalSignin;
