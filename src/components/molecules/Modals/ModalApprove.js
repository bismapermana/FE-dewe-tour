import React from "react";

const ModalApprove = () => {
  return (
    <div>
      <div className="d-flex justify-content-center mt-5 pb-5">
        <Card style={{ width: "1050px", height: "480px" }}>
          <Container className="m-3 w-100">
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
            <Row className="d-flex justify-content-between">
              <Col md={5}>
                <p className="text-title">6D/4N Fun Tassie Vacation</p>
                <p className="text-information">Australia</p>
              </Col>
              <Col md={4}>
                <div className="d-flex ">
                  <div className="mr-5">
                    <p className="text-description">Date Trip</p>
                    <p className="text-information">26 August 2021</p>
                  </div>
                  <div>
                    <p className="text-description">Duration</p>
                    <p className="text-information">6 Day 4 Night</p>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <Image src={barcode} fluid style={{ marginLeft: "20px" }} />
              </Col>
            </Row>
            <Row className="d-flex justify-content-between">
              <Col md={5}>
                <span className="text-status" rounded>
                  Approve
                </span>
              </Col>
              <Col md={4}>
                <div className="d-flex ">
                  <div className="mr-5">
                    <p className="text-description">Accomodation</p>
                    <p className="text-information">Hotel 4 nights</p>
                  </div>
                  <div style={{ marginLeft: "-30px" }}>
                    <p className="text-description">Transportation</p>
                    <p className="text-information">Qatar Airways</p>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <p style={{ marginLeft: "35px" }}>
                  <b>TCK0101</b>
                </p>
              </Col>
            </Row>
            <Row className="d-flex justify-content-between mt-5">
              <Col md={1}>
                <p className="text-description">No</p>
              </Col>
              <Col md={2}>
                <p className="text-description">Full Name</p>
              </Col>
              <Col md={2}>
                <p className="text-description">Gender</p>
              </Col>
              <Col md={2}>
                <p className="text-description">Phone</p>
              </Col>
              <Col md={5}></Col>
            </Row>
            <hr
              style={{
                border: "1px solid #b7b7b7",
                marginLeft: "-32px",
                marginTop: "-5px",
              }}
            />
            <Row className="d-flex justify-content-between text-left ">
              <Col md={1}>
                <p className="text-information">1</p>
              </Col>
              <Col md={2}>
                <p className="text-information">John Doe</p>
              </Col>
              <Col md={2}>
                <p className="text-information">Male</p>
              </Col>
              <Col md={2}>
                <p className="text-information">081318804790</p>
              </Col>
              <Col md={1}>
                <p className="text-information" style={{ color: "black" }}>
                  <b>Qty</b>
                </p>
              </Col>
              <Col md={3}>
                <div className="d-flex">
                  <p
                    className="text-information mr-4"
                    style={{ color: "black" }}
                  >
                    <b> : </b>
                  </p>
                  <p className="text-information" style={{ color: "black" }}>
                    <b> 1 </b>
                  </p>
                </div>
              </Col>
            </Row>
            <hr
              style={{
                border: "1px solid #b7b7b7",
                marginLeft: "-32px",
                marginTop: "-5px",
              }}
            />
            <Row className="d-flex justify-content-between text-left ">
              <Col md={1}></Col>
              <Col md={2}></Col>
              <Col md={2}></Col>
              <Col md={2}></Col>
              <Col md={1}>
                <p className="text-information" style={{ color: "black" }}>
                  <b>Total</b>
                </p>
              </Col>
              <Col md={3}>
                <div className="d-flex">
                  <p
                    className="text-information mr-4"
                    style={{ color: "black" }}
                  >
                    <b> : </b>
                  </p>
                  <p className="text-information" style={{ color: "#FF0000" }}>
                    <b> IDR. 12,398,000 </b>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </Card>
      </div>
    </div>
  );
};

export default ModalApprove;
