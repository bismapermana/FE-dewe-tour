import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { useHistory } from "react-router";
import "./Cards.css";
import { API } from "../../../config/api";
import { AuthContext } from "../../../context/AuthContext";

const CardContent = (props) => {
  let history = useHistory();
  const [data, setData] = useState([]);
  const [state] = useContext(AuthContext);
  const handleClickDetail = (id) => {
    history.push(`/detail/${id}`);
  };

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

  return (
    <div style={{ marginTop: "100px" }}>
      <Container className=" px-5 pb-5" fluid>
        <Row className="px-5">
          {data
            .filter((cards) => {
              if (props.search === "") {
                return cards;
              } else if (
                cards.title.toLowerCase().includes(props.search.toLowerCase())
              ) {
                return cards;
              } else if (
                cards.countries.name
                  .toLowerCase()
                  .includes(props.search.toLowerCase())
              )
                return cards;
            })
            .map((item) => (
              <Col className="mb-5">
                {state.user.status === "admin" ? (
                  <Card className="cardContentStyle ">
                    <div className=" d-flex justify-content-center">
                      <Card.Body className="align-item-center">
                        <div className="imageContainer">
                          <Image
                            src={`http://localhost:5000/uploads/${
                              JSON.parse(item.image)?.[0]
                            }`}
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
                            src={`http://localhost:5000/uploads/${
                              JSON.parse(item.image)?.[0]
                            }`}
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
                )}
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default CardContent;
