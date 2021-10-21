import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./TripDetail.css";
import content from "../assets/content.png";
import InformationTrip from "../components/atoms/detailTrip/InformationTrip";
import DescriptionTrip from "../components/atoms/detailTrip/DescriptionTrip";
import PriceTrip from "../components/atoms/detailTrip/PriceTrip";
import { useLocation } from "react-router";

const Profile = () => {
  let location = useLocation();

  console.log(location.pathname);

  return (
    <div>
      <Container>
        <div className="containerProfile">
          <Row>
            <Col className="ml-3">
              <p className="text-title">6D/4D Fun Tassie Vacation + Sydney</p>
              <p className="text-desc ">Australia</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Image src={content} rounded className="image-content" />
            </Col>
          </Row>
          <Row>
            <div className="container-thumbnail">
              <Image src={content} rounded className="image-thumbnail" />
              <Image src={content} rounded className="image-thumbnail" />
              <Image src={content} rounded className="image-thumbnail" />
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
              <InformationTrip />
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
              <DescriptionTrip />
            </Col>
          </Row>
          <Row>
            <Col>
              <PriceTrip />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
