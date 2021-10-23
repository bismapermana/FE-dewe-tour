import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { useHistory } from "react-router";
import "./CardContent.css";

const CardContent = () => {
  const data = require("../../json/tour.json");
  let history = useHistory();

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
              <Card
                className="cardContentStyle"
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
                        <p className="text-right" style={{ color: "#878787" }}>
                          <b>{item.country}</b>
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
  );
};

export default CardContent;
