import React from "react";
import logo from "../../../assets/Logo.png";
import {
  Table,
  Container,
  Row,
  Col,
  Image,
  Button,
  Modal,
} from "react-bootstrap";
import "./ModalApprove.css";
import { API } from "../../../config/api";
import approved from "../../../assets/approved.png";
import cancel from "../../../assets/cancel.png";

const formatPrice = (price) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};

const ModalApprove = (props) => {
  const handleApprove = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const approve = {
        status: "approved",
      };

      const response = await API.patch(
        "/transactions/" + props.data.id,
        approve,
        config
      );
      console.log(response);
      props.getTransactions();
      props.handleClose();
    } catch (error) {
      console.log(error);
    }
  };
  const handleCancel = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const approve = {
        status: "canceled",
      };

      const response = await API.patch(
        "/transactions/" + props.data.id,
        approve,
        config
      );
      console.log(response);
      props.getTransactions();
      props.handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {props.showModal && (
        <Modal show={props.showModal} onHide={props.handleClose} size="xl">
          <Container className="py-3">
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
            <div className="d-flex flex-row mt-4 mx-3">
              <div style={{ width: "50%", height: "200px" }}>
                <p className="text-title">{props.data.trips.title}</p>
                <p className="text-information">
                  {props.data.trips.countries.name}
                </p>
                {props.data.status !== "waiting for payment" &&
                props.data.status !== "waiting to approve" &&
                props.data.status !== "canceled" ? (
                  <p className="text-status-green" rounded>
                    {props.data.status}
                  </p>
                ) : props.data.status !== "waiting to approve" &&
                  props.data.status !== "approved" ? (
                  <p className="text-status-red" rounded>
                    {props.data.status}
                  </p>
                ) : (
                  <p className="text-status-yellow" rounded>
                    {props.data.status}
                  </p>
                )}
              </div>
              <div style={{ width: "30%", height: "200px" }}>
                <div>
                  <p className="text-description">Date Trip</p>
                  <p className="text-information">
                    {new Date(props.data.trips.dateTrip).toLocaleDateString()}
                  </p>
                </div>
                <div className="">
                  <p className="text-description">Accomodation</p>
                  <p className="text-information">
                    {props.data.trips.accomodation}
                  </p>
                </div>
              </div>
              <div style={{ width: "35%", height: "200px" }}>
                <div>
                  <p className="text-description">Duration</p>
                  <p className="text-information">
                    {props.data.trips.day} Day {props.data.trips.night}
                    Night
                  </p>
                </div>
                <div>
                  <p className="text-description">Transportation</p>
                  <p className="text-information">
                    {props.data.trips.transportation}
                  </p>
                </div>
              </div>
              <div style={{ width: "25%", height: "200px" }}>
                <Image
                  style={{ maxHeight: "150px", maxWidth: "150px" }}
                  src={props.data.attachment}
                />
              </div>
            </div>
            <Table responsive striped>
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
                <td>{props.data.users.fullName}</td>
                <td>Male</td>
                <td>{props.data.users.phone}</td>
                <td></td>
                <td>
                  <b>Qty : {props.data.counterQty}</b>{" "}
                </td>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <b> Total : {formatPrice(props.data.total)} </b>
                    <br />
                    <br />
                  </td>
                </tr>
              </tbody>
            </Table>
            <div className="d-flex justify-content-end mr-5">
              {props.data.status !== "approved" &&
              props.data.status !== "canceled" ? (
                <>
                  {props.data.status !== "waiting for payment" ? (
                    <>
                      <div>
                        <Button
                          onClick={handleCancel}
                          variant="danger"
                          className="button-style"
                        >
                          Cancel
                        </Button>
                      </div>
                      <div>
                        <Button
                          variant="success"
                          onClick={handleApprove}
                          className="button-style mr-5"
                        >
                          Approve
                        </Button>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              ) : (
                <>
                  {props.data.status !== "canceled" ? (
                    <>
                      <Image
                        src={approved}
                        style={{ width: "100px", height: "100px" }}
                      />
                    </>
                  ) : (
                    <>
                      <Image
                        src={cancel}
                        style={{ width: "100px", height: "100px" }}
                      />
                    </>
                  )}
                </>
              )}
            </div>
          </Container>
        </Modal>
      )}
    </>
  );
};

export default ModalApprove;
