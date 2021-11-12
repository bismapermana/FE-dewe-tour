import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row, Image, Button } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { IoMdCall, IoIosPin } from "react-icons/io";
import "./CardUser.css";
import profile from "../../../assets/inputUser.png";
import { API } from "../../../config/api";
import ModalEditProfile from "../modals/ModalEditProfile";

const CardUser = () => {
  const [showModalEdit, setModalEdit] = useState(false);
  const [data, setData] = useState([]);
  const handleShowModal = () => setModalEdit(true);
  const handleCloseModal = () => setModalEdit(false);

  const getData = async () => {
    try {
      const response = await API.get("/user");
      setData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-center mt-5 pb-5">
        <Card style={{ width: "650px", height: "450px" }}>
          <h1 className="m-3">Personal info</h1>
          <Container fluid className="mt-3 ">
            <Row>
              <Col md={1}>
                <CgProfile size={"3em"} className="mt-1 ml-2 mb-4" />
                <MdEmail size={"3em"} className="mt-1 ml-2 mb-4" />
                <IoMdCall size={"3em"} className="mt-1 ml-2 mb-4" />
                <IoIosPin size={"3em"} className="mt-1 ml-2 mb-4" />
              </Col>
              <Col md={5}>
                <div className=" ml-2">
                  <p className="text-personal-info">{data.fullName}</p>
                  <p className="text-profile">Full Name</p>
                </div>
                <div className="mt-4 ml-2">
                  <p className="text-personal-info">{data.email}</p>
                  <p className="text-profile">Email</p>
                </div>
                <div className="mt-3 ml-2">
                  <p className="text-personal-info">{data.phone}</p>
                  <p className="text-profile">Phone</p>
                </div>
                <div className="mt-4 ml-2">
                  <p className="text-personal-info">{data.address}</p>
                  <p className="text-profile">Address</p>
                </div>
              </Col>
              <Col md={6}>
                <div className="w-100 ">
                  <div>
                    {data.profilePicture === null ? (
                      <>
                        <Image src={profile} className=" w-75 mb-2 " />
                      </>
                    ) : (
                      <>
                        <Image
                          src={data.profilePicture}
                          style={{
                            width: "75%",
                            height: "250px",
                          }}
                          className="mb-3"
                        />
                      </>
                    )}
                  </div>
                  <div className="mb-3">
                    <Button
                      style={{ color: "white" }}
                      className="w-75"
                      variant="warning"
                      onClick={handleShowModal}
                    >
                      Update
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Card>
      </div>
      <ModalEditProfile
        showModalEdit={showModalEdit}
        handleCloseModal={handleCloseModal}
        getData={getData}
      />
    </div>
  );
};

export default CardUser;
