import React from "react";
import { Card, Col, Container, Row, Image, Button } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { IoMdCall, IoIosPin } from "react-icons/io";
import "./CardUser.css";
import profile from "../../assets/profile.png";

const CardUser = () => {
  return (
    <div>
      <div className="d-flex justify-content-center mt-5 pb-5">
        <Card style={{ width: "700px", height: "450px" }}>
          <h1 className="m-3">Personal info</h1>
          <Container className="mt-3 ">
            <Row>
              <Col md={1}>
                <CgProfile size={"3em"} className="mt-1 ml-2 mb-4" />
                <MdEmail size={"3em"} className="mt-1 ml-2 mb-4" />
                <IoMdCall size={"3em"} className="mt-1 ml-2 mb-4" />
                <IoIosPin size={"3em"} className="mt-1 ml-2 mb-4" />
              </Col>
              <Col md={4}>
                <div className=" ml-2">
                  <p className="text-personal-info">John Doe</p>
                  <p className="text-profile">Full Name</p>
                </div>
                <div className="mt-4 ml-2">
                  <p className="text-personal-info">John Doe</p>
                  <p className="text-profile">Full Name</p>
                </div>
                <div className="mt-3 ml-2">
                  <p className="text-personal-info">John Doe</p>
                  <p className="text-profile">Full Name</p>
                </div>
                <div className="mt-4 ml-2">
                  <p className="text-personal-info">John Doe</p>
                  <p className="text-profile">Full Name</p>
                </div>
              </Col>
              <Col md={6} className=" ml-5">
                <div className="justify-content-end d-flex">
                  <Image
                    src={profile}
                    fluid
                    rounded
                    style={{ height: "280px", width: "220px" }}
                  />
                </div>
                <div className="justify-content-end d-flex mt-1">
                  <Button variant="warning" className="style-button">
                    Change Photo Profile
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Card>
      </div>
    </div>
  );
};

export default CardUser;
