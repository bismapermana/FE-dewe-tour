import React from "react";
import { Modal } from "react-bootstrap";

const DropDownPayment = (props) => {
  return (
    <div>
      <Modal
        size="lg"
        centered
        show={props.showDropdown}
        onHide={props.handleCloseDropdown}
      >
        <Modal.Header>
          <Modal.Title>
            Your payment will be confrimed within 1 x 24 hours To see orders
            Click <b>here</b> Thank You!
          </Modal.Title>
        </Modal.Header>
      </Modal>
    </div>
  );
};

export default DropDownPayment;
