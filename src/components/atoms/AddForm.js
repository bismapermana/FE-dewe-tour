import React, { useEffect, useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import "./AddForm.css";
import attach from "../../assets/attach.png";
import { API } from "../../config/api";
import { useHistory } from "react-router";

const AddForm = () => {
  const [input, setInput] = useState({
    title: "",
    country: "",
    accomodation: "",
    transportation: "",
    eat: "",
    day: "",
    night: "",
    dateTrip: "",
    price: "",
    quota: "",
    description: "",
    image: [],
  });

  const history = useHistory();
  const [preview, setPreview] = useState([]);
  const [countries, setCountries] = useState([]);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    if (e.target.name === "image") {
      const target = e.target.files;
      const formArr = Array.from(target).map((file) =>
        URL.createObjectURL(file)
      );
      setPreview((item) => item.concat(formArr));
    }
  };

  const getCountries = async () => {
    try {
      const response = await API.get("/countries");
      setCountries(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  const handleOnSubmit = async (e) => {
    try {
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };
      const data = new FormData();
      for (let i = 0; i < input.image.length; i++) {
        data.append("imageFile", input.image[i]);
      }
      data.set("title", input.title);
      data.set("idCountry", input.country);
      data.set("accomodation", input.accomodation);
      data.set("transportation", input.transportation);
      data.set("eat", input.eat);
      data.set("day", input.day);
      data.set("night", input.night);
      data.set("dateTrip", input.dateTrip);
      data.set("price", input.price);
      data.set("quota", input.quota);
      data.set("description", input.description);

      const response = await API.post("/trips", data, config);
      history.push("/income");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div style={{ paddingBottom: "50px" }}>
        <Form style={{ width: "1204px", padding: "20px", marginTop: "20px" }}>
          <Form.Group className="mb-3">
            <Form.Label>
              <b>Title Trip</b>
            </Form.Label>
            <Form.Control
              className="input-field"
              type="text"
              name="title"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <b>Country</b>
            </Form.Label>
            <Form.Control
              className="input-field"
              as="select"
              onChange={handleChange}
              name="country"
            >
              <option disabled selected></option>
              {countries.map((item) => (
                <option value={item.id}>{item.name}</option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <b>Accomodation</b>
            </Form.Label>
            <Form.Control
              type="text"
              className="input-field"
              name="accomodation"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <b>Transportation</b>
            </Form.Label>
            <Form.Control
              type="text"
              className="input-field"
              name="transportation"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <b>Eat</b>
            </Form.Label>
            <Form.Control
              type="text"
              className="input-field"
              name="eat"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Label>
            <b>Duration</b>
          </Form.Label>
          <div className="d-flex ">
            <div>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  className="input-field"
                  name="day"
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div>
              <p className="mx-2" style={{ marginTop: "5px" }}>
                <b>Day</b>
              </p>
            </div>
            <div>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  className="input-field"
                  name="night"
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <div>
              <p className="ml-2" style={{ marginTop: "5px" }}>
                <b>Night</b>
              </p>
            </div>
          </div>
          <Form.Group className="mb-3">
            <Form.Label>
              <b>Date Trip</b>
            </Form.Label>
            <Form.Control
              type="date"
              className="input-field"
              name="dateTrip"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <b>Price</b>
            </Form.Label>
            <Form.Control
              type="text"
              className="input-field"
              name="price"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <b>Quota</b>
            </Form.Label>
            <Form.Control
              type="text"
              className="input-field"
              name="quota"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              <b>Description</b>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              className="input-field"
              name="description"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Label>
            <b>Image</b>
          </Form.Label>
          <Form.Group controlId="formFile" className="mb-3">
            <label className="ml-3">
              {preview &&
                preview.map((item) => (
                  <Image
                    style={{
                      width: "220px",
                      height: "150px",
                      marginTop: "20px",
                      marginBottom: "30px",
                      marginRight: "10px",
                    }}
                    src={item}
                    alt="receipt"
                  />
                ))}
              <div className="container-image rounded">
                <div>
                  <p style={{ fontSize: "15px" }}>
                    <b>Attach Here</b>
                  </p>
                </div>

                <div>
                  <Image src={attach} className="image-style" fluid />
                </div>
              </div>

              <input
                type="file"
                hidden
                name="image"
                onChange={handleChange}
                accept=".jpg,.jpeg,.png,.svg"
                required
                multiple
              />
            </label>
          </Form.Group>
        </Form>
        <Button
          variant="warning"
          className="button-style"
          onClick={handleOnSubmit}
        >
          <b>Add Trip</b>
        </Button>
      </div>
    </div>
  );
};

export default AddForm;
