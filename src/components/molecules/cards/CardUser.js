import React, { useContext, useState } from "react";
import { Card, Col, Container, Row, Image, Button } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import { MdEmail } from "react-icons/md";
import { IoMdCall, IoIosPin } from "react-icons/io";
import "./CardUser.css";
import profile from "../../../assets/profile.png";
import { AuthContext } from "../../../context/AuthContext";
import { API } from "../../../config/api";

const CardUser = () => {
  const [state] = useContext(AuthContext);
  const [image, setImage] = useState({ imageFile: "" });
  const [preview, setPreview] = useState(null);

  const handleOnChange = (e) => {
    setImage({
      ...image,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });
    if (e.target.name === "imageFile") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  console.log(state);

  const handleSubmit = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const data = new FormData();
      data.set("imageFile", image.imageFile[0]);
      const response = await API.patch("/user/", data, config);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

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
                  <p className="text-personal-info">{state.user.fullName}</p>
                  <p className="text-profile">Full Name</p>
                </div>
                <div className="mt-4 ml-2">
                  <p className="text-personal-info">{state.user.email}</p>
                  <p className="text-profile">Email</p>
                </div>
                <div className="mt-3 ml-2">
                  <p className="text-personal-info">{state.user.phone}</p>
                  <p className="text-profile">Phone</p>
                </div>
                <div className="mt-4 ml-2">
                  <p className="text-personal-info">{state.user.address}</p>
                  <p className="text-profile">Address</p>
                </div>
              </Col>
              <Col md={6} className=" ml-5">
                {state.user.profilePicture === null ? (
                  <form>
                    <label className="justify-content-end d-flex mr-5">
                      <Image
                        src={profile}
                        fluid
                        rounded
                        style={{ height: "150px", width: "140px" }}
                      />
                      <input
                        accept=".jpg,.jpeg,.png,.svg"
                        requred
                        hidden
                        name="imageFile"
                        type="file"
                        onChange={handleOnChange}
                      />
                    </label>
                  </form>
                ) : (
                  <div className="justify-content-end d-flex">
                    {preview === null ? (
                      <>
                        <Image
                          src={state.user.profilePicture}
                          fluid
                          rounded
                          style={{ height: "280px", width: "220px" }}
                        />
                      </>
                    ) : (
                      <>
                        <Image
                          src={preview}
                          fluid
                          rounded
                          style={{ height: "280px", width: "220px" }}
                        />
                      </>
                    )}
                  </div>
                )}
                <div className="justify-content-end d-flex mt-1">
                  <Button
                    onClick={handleSubmit}
                    variant="warning"
                    className="style-button"
                  >
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
