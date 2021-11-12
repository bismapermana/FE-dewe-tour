import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col, Image, Card } from "react-bootstrap";
import { useHistory } from "react-router";
import NavbarComp from "../../components/Navbars";
import Footer from "../../components/Footer";
import ModalAddCountry from "../../components/molecules/modals/ModalAddCountry";
import { API } from "../../config/api";

const IncomeTrip = () => {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [showModalCountry, setShowModalCountry] = useState(false);

  const handleClick = () => {
    history.push("/addtrip");
  };

  const handleShowModal = () => setShowModalCountry(true);
  const handleCloseModal = () => setShowModalCountry(false);

  const getData = async () => {
    try {
      const response = await API.get("/trips");

      setData(response.data.data);
    } catch (error) {
      alert("Cannot get data");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const image = data.map((item) => {
    return JSON.parse(item.image);
  });

  return (
    <div>
      <NavbarComp />
      <div
        className="d-flex justify-content-between px-5 mt-5  "
        style={{ marginBottom: "-50px" }}
      >
        <h1>
          <b>Income Trip</b>
        </h1>
        <div>
          <Button
            variant="warning"
            className="px-5"
            style={{ color: "white", width: "200px" }}
            onClick={handleClick}
          >
            <b> Add Trip</b>
          </Button>
          <Button
            variant="warning"
            className="px-5 ml-3"
            style={{ color: "white", width: "200px" }}
            onClick={handleShowModal}
          >
            <b> Add Country</b>
          </Button>
        </div>
      </div>
      <div style={{ marginTop: "100px" }}>
        <Container className=" px-5 pb-5" fluid>
          <Row className="px-5">
            {data.map((item, i) => (
              <Col className="mb-5">
                <Card className="cardContentStyle">
                  <div className=" d-flex justify-content-center">
                    <Card.Body className="align-item-center">
                      <div className="imageContainer">
                        <Image
                          src={`http://localhost:5000/uploads/${image[i][0]}`}
                          className="mb-2 imageStyle rounded "
                          style={{ marginTop: "-11px" }}
                        />
                        <div className="textImage">
                          {item.available}/{item.quota}
                        </div>
                      </div>
                      <Card.Title>
                        <b>{item.title}</b>
                      </Card.Title>
                      <Row>
                        <Col>
                          <p style={{ color: "#FFAF00" }}>
                            <b> {formatPrice(item.price)}</b>
                          </p>
                        </Col>
                        <Col>
                          <p
                            className="text-right"
                            style={{ color: "#878787" }}
                          >
                            <b>{item.countries.name}</b>
                          </p>
                        </Col>
                      </Row>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <ModalAddCountry
        handleCloseModal={handleCloseModal}
        showModalCountry={showModalCountry}
      />
      <Footer />
    </div>
  );
};

export default IncomeTrip;
