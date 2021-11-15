import React from "react";
import { Card, Col, Container, Row, Image } from "react-bootstrap";
import "./Cards.css";
import iconAgent from "../../../assets/iconAgent.png";
import iconLike from "../../../assets/iconLike.png";
import iconCs from "../../../assets/iconCs.png";
import iconGuarantee from "../../../assets/iconGuarantee.png";

const CardInformation = () => {
  return (
    <div>
      <Container className=" px-5 " fluid>
        <Row className="px-5">
          <Col className="text-center">
            <Card className="cardStyle">
              <Card.Body className="m-2 mt-5">
                <Image src={iconAgent} className="mb-4" />
                <Card.Title>
                  <b>Best Travel Agent</b>
                </Card.Title>
                <Card.Text>
                  A small river named duren flows by their place and suplies
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="text-center">
            <Card className="cardStyle">
              <Card.Body className="m-2 mt-5">
                <Image src={iconLike} className="mb-4" />
                <Card.Title>
                  <b>Travellers Love Us</b>
                </Card.Title>
                <Card.Text>
                  A small river named duren flows by their place and suplies
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="text-center">
            <Card className="cardStyle">
              <Card.Body className="m-2 mt-5">
                <Image src={iconCs} className="mb-4" />
                <Card.Title>
                  <b>Our Dedicated Support</b>
                </Card.Title>
                <Card.Text>
                  A small river named duren flows by their place and suplies
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="text-center">
            <Card className="cardStyle">
              <Card.Body className="m-2 mt-5">
                <Image src={iconGuarantee} className="mb-4" />
                <Card.Title>
                  <b>Best Price Guaranteee</b>
                </Card.Title>
                <Card.Text>
                  A small river named duren flows by their place and suplies
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CardInformation;
