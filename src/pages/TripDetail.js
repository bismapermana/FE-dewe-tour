import React, { useContext, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { AuthContext } from "../context/AuthContext";
import ModalLogin from "../components/molecules/Modals/ModalLogin";
import "./TripDetail.css";
import content from "../assets/content.png";
import InformationTrip from "../components/atoms/detailTrip/InformationTrip";
import DescriptionTrip from "../components/atoms/detailTrip/DescriptionTrip";
import PriceTrip from "../components/atoms/detailTrip/PriceTrip";
import { useParams } from "react-router-dom";
import data from "../json/tour.json";
import NavbarComp from "../components/Navbars";
import Footer from "../components/Footer";

const TripDetail = () => {
  const { id } = useParams();
  const detailData = data.find((item) => item.id === parseInt(id));
  const [state, dispatch] = useContext(AuthContext);
  const [showLogin, setShowLogin] = useState(false);
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);
  return (
    <div>
      <NavbarComp />

      <Container className="py-4">
        <div className="containerProfile">
          <Row>
            <Col className="ml-3">
              <p className="text-title">{detailData.title}</p>
              <p className="text-desc ">{detailData.country}</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Image
                src={detailData.image[0]}
                rounded
                className="image-content"
              />
            </Col>
          </Row>
          <Row>
            <div className="container-thumbnail">
              <Image
                src={detailData.image[1]}
                rounded
                className="image-thumbnail"
              />
              <Image
                src={detailData.image[2]}
                rounded
                className="image-thumbnail"
              />
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
              <InformationTrip
                accomodation={detailData.accomodation}
                transportation={detailData.transportation}
                eat={detailData.eat}
                duration={detailData.duration}
                dateTrip={detailData.dateTrip}
              />
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
              <DescriptionTrip description={detailData.description} />
            </Col>
          </Row>
          <Row>
            <Col>
              <PriceTrip
                price={detailData.price}
                quota={detailData.quota}
                dispatch={dispatch}
                state={state}
                handleShowLogin={handleShowLogin}
                handleCloseLogin={handleCloseLogin}
              />
            </Col>
          </Row>
        </div>
      </Container>

      <Footer />
      <ModalLogin showLogin={showLogin} handleCloseLogin={handleCloseLogin} />
    </div>
  );
};

export default TripDetail;
