import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import ModalApprove from "../molecules/Modals/ModalApprove";

const TableTransaction = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Users</th>
            <th>Trip</th>
            <th>Bukti tansfer</th>
            <th>Status payment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Bisma</td>
            <td>6D / 4N Fun Tassie Vacation </td>
            <td>bca.jpg</td>
            <td>Approve</td>
            <td onClick={handleShow}>
              <BiSearch
                size={"2em"}
                style={{ color: "#2FC5F7", cursor: "pointer" }}
              />
            </td>
          </tr>
        </tbody>
      </Table>

      <ModalApprove showModal={showModal} handleClose={handleClose} />
    </div>
  );
};

export default TableTransaction;
