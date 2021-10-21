import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./PriceTrip.css";

const PriceTrip = () => {
  const initialPrice = 12000000;

  const [quantity, setQuantity] = useState(1);
  //   const [price, setPrice] = useState(initialPrice * quantity);
  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <div className="d-flex bd-highlight align-items-baseline  ">
        <div className="bd-hightlight">
          <span style={{ color: "#FFAF00", fontSize: "25px" }}>
            <b>IDR. {initialPrice} </b>
          </span>
          <span>/ Person</span>
        </div>
        <div className="bd-highlight ml-auto mt-3">
          <Button
            variant="warning"
            className="mr-4 rounded-circle button-text"
            onClick={decrement}
          >
            -
          </Button>
          <span>
            <b>{quantity}</b>
          </span>
          <Button
            variant="warning"
            className="ml-4 rounded-circle button-text"
            onClick={increment}
          >
            +
          </Button>
        </div>
      </div>
      <hr style={{ border: "1px solid #b7b7b7", marginTop: "20px" }} />
      <div className="d-flex bd-highlight align-items-baseline  ">
        <div className="bd-hightlight">
          <span style={{ fontSize: "25px" }}>
            <b>Total : </b>
          </span>
        </div>
        <div
          className="bd-highlight ml-auto mt-3"
          style={{ color: "#FFAF00", fontSize: "25px" }}
        >
          <span>
            <b>{initialPrice * quantity}</b>
          </span>
        </div>
      </div>
      <hr style={{ border: "1px solid #b7b7b7", marginTop: "20px" }} />
      <div className="d-flex justify-content-end">
        <Button variant="warning" className="button-text" size="lg">
          BOOK NOW
        </Button>
      </div>
    </div>
  );
};

export default PriceTrip;
