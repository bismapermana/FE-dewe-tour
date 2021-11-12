import React, { useState, useEffect } from "react";
import { Table, Image } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import { API } from "../../config/api";
import ModalApprove from "../molecules/modals/ModalApprove";
import "./TableTransaction.css";

const TableTransaction = () => {
  const [showModal, setShowModal] = useState(false);
  const [transactions, setTransactions] = useState([]);
  const [data, setData] = useState({});
  const handleClose = () => setShowModal(false);

  const getTransactions = async () => {
    try {
      const respone = await API.get("/transactions/");
      setTransactions(respone.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleShow = (item) => {
    setShowModal(true);
    setData(item);
  };

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div>
      <Table
        striped
        bordered
        hover
        variant="light"
        style={{ textAlign: "center" }}
      >
        <thead>
          <tr style={{ fontSize: "20px" }}>
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
            <tr style={{ fontSize: "15px" }}>
              <td>{index + 1}</td>
              <td>{item.users.fullName}</td>
              <td>{item.trips.title}</td>
              <td>
                <Image
                  src={item.attachment}
                  style={{ maxWidth: "50px", maxHeight: "30px" }}
                />
              </td>
              <td>
                {item.status !== "waiting for payment" &&
                item.status !== "waiting to approve" &&
                item.status !== "canceled" ? (
                  <p className="text-green" rounded>
                    {item.status}
                  </p>
                ) : item.status !== "waiting to approve" &&
                  item.status !== "approved" ? (
                  <p className="text-red" rounded>
                    {item.status}
                  </p>
                ) : (
                  <p className="text-yellow" rounded>
                    {item.status}
                  </p>
                )}
              </td>
              <td onClick={() => handleShow(item)}>
                <BiSearch
                  size={"2em"}
                  style={{ color: "#2FC5F7", cursor: "pointer" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ModalApprove
        data={data}
        showModal={showModal}
        handleClose={handleClose}
        getTransactions={() => getTransactions()}
      />
    </div>
  );
};

export default TableTransaction;
