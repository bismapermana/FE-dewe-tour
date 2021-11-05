import React, { useState } from "react";
import { Modal, Form, Button, Image, Alert } from "react-bootstrap";
import { useHistory } from "react-router";
import "./Modal.css";
import palm from "../../../assets/palm.png";
import hibiscus from "../../../assets/hibiscus.png";
import { API, setAuthToken } from "../../../config/api";

const ModalSignin = (props) => {
  const [errorAlert, setErrorAlert] = useState(false);
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

  const handleIsLogin = async (e) => {
    try {
      e.preventDefault();

      const config = {
        header: {
          "Content-type": "application/json",
        },
      };

      const response = await API.post("/login", item, config);
      setAuthToken(response.data.data.token);

      const getData = await API.get("/user");

      props.dispatch({
        type: "LOGIN_SUCCESS",
        payload: getData.data.data,
      });

      localStorage.setItem("token", response.data.data.token);
      if (props.state.user.status === "admin") {
        history.push("/list");
      }
      props.handleCloseLogin();
    } catch (error) {
      setErrorAlert(true);
      setTimeout(() => {
        setErrorAlert(false);
      }, 3000);
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
          {errorAlert && (
            <Alert variant="danger" style={{ height: "50px" }}>
              <p>Wrong email and password!</p>
            </Alert>
          )}
          <Form onSubmit={handleIsLogin}>
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
