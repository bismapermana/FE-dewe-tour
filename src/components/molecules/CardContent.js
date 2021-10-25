import React, { useContext } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { useHistory } from "react-router";
import "./CardContent.css";
import data from "../../json/tour.json";
import { AuthContext } from "../../context/AuthContext";

const CardContent = () => {
  let history = useHistory();
  const [state] = useContext(AuthContext);
  const handleClickDetail = (id) => {
    history.push(`/detail/${id}`);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <Container className=" px-5 pb-5" fluid>
        <Row className="px-5">
          {data.map((item, i) => (
            <Col key={i} className="mb-5">
              {state.user.name === "admin" ? (
                <Card className="cardContentStyle">
                  <div className=" d-flex justify-content-center">
                    <Card.Body className="align-item-center">
                      <div className="imageContainer">
                        <Image
                          src={item.image[0]}
                          className="mb-2 imageStyle rounded "
                          style={{ marginTop: "-11px" }}
                        />
                        <div className="textImage">10/{item.quota}</div>
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
                            <b>{item.country}</b>
                          </p>
                        </Col>
                      </Row>
                    </Card.Body>
                  </div>
                </Card>
              ) : (
                //-------------------------------------- USER ---------------------------------
                <Card
                  className="cardContentStyle"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleClickDetail(item.id)}
                >
                  <div className=" d-flex justify-content-center">
                    <Card.Body className="align-item-center">
                      <div className="imageContainer">
                        <Image
                          src={item.image[0]}
                          className="mb-2 imageStyle rounded "
                          style={{ marginTop: "-11px" }}
                        />
                        <div className="textImage">10/{item.quota}</div>
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
                            <b>{item.country}</b>
                          </p>
                        </Col>
                      </Row>
                    </Card.Body>
                  </div>
                </Card>
              )}
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CardContent;
