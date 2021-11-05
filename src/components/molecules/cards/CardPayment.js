import React, { useState, useEffect, useContext } from "react";
import { Card, Container, Image, Row, Col, Table } from "react-bootstrap";
import logo from "../../../assets/Logo.png";
import "./CardPayment.css";
import { API } from "../../../config/api";
import { AuthContext } from "../../../context/AuthContext";
import CardLoader from "./CardLoader";

const CardPayment = () => {
  const [transaction, setTransaction] = useState([]);
  const [loading, setLoading] = useState(false);
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

  return (
    <>
      {transaction.map((item) => (
        <div>
          {loading === false ? (
            <div className="d-flex justify-content-center mt-5 pb-5">
              <Card style={{ width: "1050px", height: "480px" }}>
                <CardLoader />
              </Card>
            </div>
          ) : (
            <div className="d-flex justify-content-center mt-5 pb-5">
              <Card style={{ width: "1050px", height: "480px" }}>
                <Container>
                  <Row className="d-flex justify-content-between pt-3">
                    <Col md={4}>
                      <Image src={logo} rounded fluid className=" mt-2" />
                    </Col>
                    <Col md={5}></Col>
                    <Col md={3} style={{ textAlign: "center" }}>
                      <p style={{ fontWeight: "800", fontSize: "36px" }}>
                        Booking
                      </p>
                      <p style={{ color: "#878787", margin: "-20px" }}>
                        <b>Saturday</b>, 22 July 2021{" "}
                      </p>
                    </Col>
                  </Row>
                  <div className="d-flex flex-row mt-4 mx-3">
                    <div style={{ width: "30%", height: "200px" }}>
                      <p className="text-title">{item.trips.title}</p>
                      <p className="text-information">
                        {item.trips.countries.name}
                      </p>
                      <p className="text-status" rounded>
                        {item.status}
                      </p>
                    </div>
                    <div style={{ width: "20%", height: "200px" }}>
                      <div>
                        <p className="text-description">Date Trip</p>
                        <p className="text-information">
                          {item.trips.dateTrip}
                        </p>
                      </div>
                      <div className="mt-5">
                        <p className="text-description">Accomodation</p>
                        <p className="text-information">
                          {item.trips.accomodation}
                        </p>
                      </div>
                    </div>
                    <div style={{ width: "25%", height: "200px" }}>
                      <div>
                        <p className="text-description">Duration</p>
                        <p className="text-information">
                          {item.trips.day} Day {item.trips.night}
                          Night
                        </p>
                      </div>
                      <div>
                        <p className="text-description">Transportation</p>
                        <p className="text-information">
                          {item.trips.transportation}
                        </p>
                      </div>
                    </div>
                    <div style={{ width: "25%", height: "200px" }}>
                      <Image src="" />
                    </div>
                  </div>
                  <Table responsive>
                    <tbody>
                      <tr>
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
                      <td>Qty : {item.counterQty}</td>
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                          Total : {formatPrice(item.total)}
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
        </div>
      ))}
    </>
  );
};

export default CardPayment;
