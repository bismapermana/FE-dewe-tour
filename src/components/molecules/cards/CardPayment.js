import React, { useState, useEffect, useContext } from "react";
import { Card, Container, Image, Row, Col, Form, Table } from "react-bootstrap";
import logo from "../../../assets/Logo.png";
import barcode from "../../../assets/barcode.png";
import "./CardPayment.css";
import { API } from "../../../config/api";
import { AuthContext } from "../../../context/AuthContext";
import CardLoader from "./CardLoader";

const CardPayment = () => {
  const [transaction, setTransaction] = useState({});
  const [loading, setLoading] = useState(false);
  const [inputImage, setInputImage] = useState({ attachment: "" });
  const [preview, setPreview] = useState();
  const [state] = useContext(AuthContext);
  const getTransaction = async () => {
    try {
      const response = await API.get("/transaction");
      setTransaction(response.data.data);
      setTimeout(() => {
        setLoading(true);
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(state);

  useEffect(() => {
    getTransaction();
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleOnChange = () => {
    setInputImage({
      inputImage,
    });
  };

  return (
    <>
      {loading === false ? (
        <div className="d-flex justify-content-center mt-5 pb-5">
          <Card style={{ width: "1050px", height: "480px" }}>
            <CardLoader />
          </Card>
        </div>
      ) : (
        <div className="d-flex justify-content-center mt-5 pb-5">
          <Card style={{ width: "1050px", height: "480px" }}>
            <Container className="m-3 w-100">
              <Row className="d-flex justify-content-between">
                <Col md={4}>
                  <Image src={logo} rounded fluid className=" mt-2" />
                </Col>
                <Col md={5}></Col>
                <Col md={3}>
                  <p style={{ fontWeight: "800", fontSize: "36px" }}>Booking</p>
                  <p style={{ color: "#878787" }} clasName="text-right">
                    <b>Saturday</b>, 22 July 2021{" "}
                  </p>
                </Col>
              </Row>
              <Row className="d-flex justify-content-between">
                <Col md={4}>
                  <p className="text-title">{transaction.trips.title}</p>
                  <p className="text-information">
                    {transaction.trips.countries.name}
                  </p>
                </Col>
                <Col md={3}>
                  <div className="d-flex ">
                    <div style={{ marginRight: "100px" }}>
                      <p className="text-description">Date Trip</p>
                      <p className="text-information">
                        {transaction.trips.dateTrip}
                      </p>
                    </div>
                    <div style={{ marginLeft: "-40px" }}>
                      <p className="text-description">Duration</p>
                      <p className="text-information">
                        {transaction.trips.day} Day {transaction.trips.night}
                        Night
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={5}>
                  <div className="d-flex justify-content-center ml-5">
                    <Form.Group controlId="formFile"></Form.Group>
                    <Image src={barcode} style={{ width: "100px" }} />
                  </div>
                </Col>
              </Row>
              <Row className="d-flex justify-content-between">
                <Col md={4}>
                  <span className="text-status" rounded>
                    {transaction.status}
                  </span>
                </Col>
                <Col md={3}>
                  <div className="d-flex ">
                    <div style={{ marginRight: "100px" }}>
                      <p className="text-description">Accomodation</p>
                      <p className="text-information">
                        {transaction.trips.accomodation}
                      </p>
                    </div>
                    <div style={{ marginLeft: "-30px" }}>
                      <p className="text-description">Transportation</p>
                      <p className="text-information">
                        {transaction.trips.transportation}
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={5}></Col>
              </Row>
              <Table responsive>
                <tbody>
                  <tr style={{ border: "none" }}>
                    <th>No</th>
                    <th>Fullname</th>
                    <th>Gender</th>
                    <th>No Phone</th>
                    <th></th>
                    <th></th>
                  </tr>
                  <td>1</td>
                  <td>{state.user.fullName}</td>
                  <td>Male</td>
                  <td>{state.user.phone}</td>
                  <td></td>
                  <td>Qty : {transaction.counterQty}</td>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      Total : {transaction.total}
                      <br />
                      <br />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Container>
          </Card>
        </div>
      )}
    </>
  );
};

export default CardPayment;
