import React, { useState, useEffect } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "./TripDetail.css";
import { IoAirplaneOutline } from "react-icons/io5";
import { useHistory } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { FaHotel } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import { useParams } from "react-router-dom";
import NavbarComp from "../components/Navbars";
import Footer from "../components/Footer";
import { API } from "../config/api";
import DropDownPayment from "../components/atoms/DropDownPayment";

const TripDetail = () => {
  const { id } = useParams();
  const [trip, setTrip] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  let history = useHistory();

  const getTripDetail = async () => {
    try {
      const response = await API.get(`/trip/${id}`);

      setTrip(response.data.data);
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTripDetail();
  }, []);

  const initialPrice = trip.price;
  const increment = () => {
    if (trip.quota - trip.available > quantity) {
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

  const handleBook = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const data = {
        total: totalPrice,
        counterQty: quantity,
        idTrip: id,
      };

      await API.post("/transactions", data, config);
      history.push("/payment");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <NavbarComp />

      {loading && (
        <Container className="py-4">
          <div className="containerProfile">
            <Row>
              <Col className="ml-3">
                <p className="text-title">{trip.title}</p>
                <p className="text-desc ">{trip.country}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <Image src={trip.image[0]} rounded className="image-content" />
              </Col>
            </Row>
            <Row>
              <div className="container-thumbnail">
                <Image
                  src={trip.image[1]}
                  rounded
                  className="image-thumbnail"
                />
                <Image
                  src={trip.image[2]}
                  rounded
                  className="image-thumbnail"
                />
                <Image
                  src={trip.image[3]}
                  rounded
                  className="image-thumbnail"
                />
              </div>
            </Row>
            <Row>
              <Col className="mt-5">
                <h3>
                  <b>Information Trip</b>
                </h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="infoTripContainer">
                  <div>
                    <p>Accomodation</p>
                    <div className="detailTripContainer">
                      <FaHotel size="1.8em" className="mr-1" />
                      <span>{trip.accomodation}</span>
                    </div>
                  </div>
                  <div>
                    <p>Transportation</p>
                    <div className="detailTripContainer">
                      <IoAirplaneOutline
                        size="1.8em"
                        style={{ transform: "rotate(-45deg)" }}
                        className="mr-1"
                      />
                      <span>{trip.transportation}</span>
                    </div>
                  </div>
                  <div>
                    <p>Eat</p>
                    <div className="detailTripContainer">
                      <GiMeal size="1.8em" className="mr-1" />
                      <span>{trip.eat}</span>
                    </div>
                  </div>
                  <div>
                    <p>Duration</p>
                    <div className="detailTripContainer">
                      <AiOutlineClockCircle size="1.8em" className="mr-1" />
                      <span>
                        Day {trip.day} / Night {trip.night}
                      </span>
                    </div>
                  </div>
                  <div>
                    <p>Date Trip</p>
                    <div className="detailTripContainer">
                      <BsCalendarDate size="1.8em" className="mr-1" />
                      <span>
                        {new Date(trip.dateTrip).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col className="mt-5">
                <h3>
                  <b>Description</b>
                </h3>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <p>{trip.description}</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
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
                        className="mr-4  button-text"
                        onClick={decrement}
                        style={{ width: "40px" }}
                      >
                        <b>-</b>
                      </Button>
                      <span>
                        <b>{quantity}</b>
                      </span>
                      <Button
                        variant="warning"
                        className="ml-4  button-text"
                        onClick={increment}
                        style={{ width: "40px" }}
                      >
                        <b>+</b>
                      </Button>
                    </div>
                  </div>
                  <hr
                    style={{ border: "1px solid #b7b7b7", marginTop: "20px" }}
                  />
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
                  <hr
                    style={{ border: "1px solid #b7b7b7", marginTop: "20px" }}
                  />
                  <div className="d-flex justify-content-end">
                    <Button
                      variant="warning"
                      className="button-text shadow"
                      size="lg"
                      style={{ color: "white" }}
                      onClick={handleBook}
                    >
                      BOOK NOW
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      )}
      <Footer />
    </div>
  );
};

export default TripDetail;
