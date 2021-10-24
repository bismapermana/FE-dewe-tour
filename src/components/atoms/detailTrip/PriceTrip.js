import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import "./PriceTrip.css";

const PriceTrip = (props) => {
  const initialPrice = props.price;
  const [quantity, setQuantity] = useState(1);
  const history = useHistory();

  const handleBook = () => {
    if (props.state.isLogin === false) {
      props.handleShowLogin();
    } else {
      history.push("/payment");
      props.handleCloseLogin();
    }
  };

  console.log(props.state.isLogin);

  const increment = () => {
    if (props.quota > quantity) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = initialPrice * quantity;

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div>
      <div className="d-flex bd-highlight align-items-baseline  ">
        <div className="bd-hightlight">
          <span style={{ color: "#FFAF00", fontSize: "25px" }}>
            <b> {formatPrice(initialPrice)} </b>
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
            <b>{formatPrice(totalPrice)}</b>
          </span>
        </div>
      </div>
      <hr style={{ border: "1px solid #b7b7b7", marginTop: "20px" }} />
      <div className="d-flex justify-content-end">
        <Button
          variant="warning"
          className="button-text"
          size="lg"
          onClick={handleBook}
        >
          BOOK NOW
        </Button>
      </div>
    </div>
  );
};

export default PriceTrip;
