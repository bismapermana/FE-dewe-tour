import React from "react";
import { Table } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";

const TableTransaction = () => {
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
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
            <td>
              <BiSearch size={"2em"} style={{ color: "#2FC5F7" }} />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TableTransaction;
