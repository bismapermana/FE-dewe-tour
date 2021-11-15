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
        <p style={{ fontWeight: "500", fontSize: "20px" }}>
          Your payment will be confrimed within 1 x 24 hours To see orders Click{" "}
          <b>here</b> Thank You!
        </p>
      </Modal>
    </div>
  );
};

export default DropDownPayment;
