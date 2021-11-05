import React, { useState, useEffect, useContext } from "react";
import {
  Button,
  Card,
  Container,
  Image,
  Row,
  Col,
  Table,
} from "react-bootstrap";
import logo from "../../assets/Logo.png";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { API } from "../../config/api";
import { AuthContext } from "../../context/AuthContext";
import Footer from "../../components/Footer";
import "./Payment.css";
import NavbarComp from "../../components/Navbars";
import CardLoader from "../../components/molecules/cards/CardLoader";

const Payment = () => {
  const [transaction, setTransaction] = useState([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ imageFile: "" });
  const [preview, setPreview] = useState(null);
  const [button, setButton] = useState(true);
  const [state] = useContext(AuthContext);

  const getTransaction = async () => {
    try {
      const response = await API.get("/transaction/");
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

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });
    if (e.target.name === "imageFile") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleSubmit = async (id) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const data = new FormData();
      data.set("imageFile", form.imageFile[0]);
      const response = await API.patch(
        "/transactions/payment/" + id,
        data,
        config
      );
      setButton(false);
      getTransaction();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavbarComp />
      {transaction.map((item) => (
        <div className="p-5">
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
                      <div
                        className=""
                        style={{ width: "30%", height: "200px" }}
                      >
                        <p className="text-title">{item.trips.title}</p>
                        <p className="text-information">
                          {item.trips.countries.name}
                        </p>
                        <p className="text-status" rounded>
                          {item.status}
                        </p>
                      </div>
                      <div
                        className=""
                        style={{ width: "20%", height: "200px" }}
                      >
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
                      <div
                        className=""
                        style={{ width: "25%", height: "200px" }}
                      >
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
                      <div
                        className=""
                        style={{ width: "25%", height: "200px" }}
                      >
                        {preview === null ? (
                          <form>
                            <label className="d-flex justify-content-center  ml-5">
                              <IoDocumentAttachOutline
                                size="4em"
                                style={{ cursor: "pointer" }}
                              />
                              <input
                                accept=".jpg,.jpeg,.png,.svg"
                                required
                                hidden
                                name="imageFile"
                                type="file"
                                onChange={handleOnChange}
                              />
                            </label>
                          </form>
                        ) : (
                          <label className="d-flex  justify-content-center  ml-5">
                            <Image
                              src={preview}
                              style={{ width: "150px" }}
                              fluid
                            />
                          </label>
                        )}
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
          </>
          {item.status === "waiting for payment" ? (
            <Button
              style={{ marginLeft: "100px", width: "150px", color: "white" }}
              variant="warning"
              onClick={() => handleSubmit(item?.id)}
            >
              PAY
            </Button>
          ) : (
            <></>
          )}
        </div>
      ))}
      <Footer />
    </>
  );
};

export default Payment;
