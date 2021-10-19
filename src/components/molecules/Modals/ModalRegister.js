import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalRegister = (props) => {
  return (
    <div>
      <Modal show={props.showRegister} onHide={props.handleCloseRegister}>
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
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="mb-4">
              <p className="mb-1">
                <b>Email</b>
              </p>
              <input
                className="form-style w-100 py-2 rounded form-input"
                type="email"
              />
            </Form.Group>
            <Form.Group className="mb-4">
              <p className="mb-1">
                <b>Phone Number</b>
              </p>
              <input
                className="form-style w-100 py-2 rounded form-input"
                type="number"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <p className="mb-1">
                <b>Password</b>
              </p>
              <input
                className="form-style w-100 py-2 rounded form-input"
                type="password"
                rafc
              />
            </Form.Group>

            <Button
              variant="warning"
              onClick={props.handleCloseRegister}
              className="w-100 mt-4 py-2 btn-style"
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

export default ModalRegister;
