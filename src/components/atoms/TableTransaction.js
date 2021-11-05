import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { API } from "../../config/api";
import ModalApprove from "../molecules/modals/ModalApprove";

const TableTransaction = () => {
  const [showModal, setShowModal] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const getTransactions = async () => {
    try {
      const respone = await API.get("/transactions/");
      setTransactions(respone.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  console.log(transactions);

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
          {transactions.map((item, index) => (
            <tr>
              <td>{index}</td>
              <td>{item.users.fullName}</td>
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
          ))}
        </tbody>
      </Table>

      <ModalApprove showModal={showModal} handleClose={handleClose} />
    </div>
  );
};

export default TableTransaction;
