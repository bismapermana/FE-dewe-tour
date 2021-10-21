import React from "react";
import TableTransaction from "../../components/atoms/TableTransaction";

const ListTransaction = () => {
  return (
    <div>
      <div className="d-flex justify-content-center py-5 ">
        <div style={{ width: "1200px" }}>
          <TableTransaction />
        </div>
      </div>
    </div>
  );
};

export default ListTransaction;
