import React, { useState } from "react";
import { Button, Form, Image } from "react-bootstrap";
import "./AddForm.css";
import attach from "../../assets/attach.png";

const AddForm = () => {
  const [input, setInput] = useState({
    title: "",
    country: "",
    accomodaion: "",
    transportation: "",
    eat: "",
    day: "",
    night: "",
    dateTrip: "",
    price: "",
    quota: "",
    description: "",
    image: "",
  });
  const [preview, setPreview] = useState();

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
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
            <Form.Control className="input-field" type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <b>Country</b>
            </Form.Label>
            <Form.Control className="input-field" as="select">
              <option></option>
              <option value="1">Indonesia</option>
              <option value="2">France</option>
              <option value="3">Lesotho</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <b>Accomodation</b>
            </Form.Label>
            <Form.Control type="text" className="input-field" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <b>Transportation</b>
            </Form.Label>
            <Form.Control type="text" className="input-field" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <b>Eat</b>
            </Form.Label>
            <Form.Control type="text" className="input-field" />
          </Form.Group>
          <Form.Label>
            <b>Duration</b>
          </Form.Label>
          <div className="d-flex ">
            <div>
              <Form.Group className="mb-3">
                <Form.Control type="text" className="input-field" />
              </Form.Group>
            </div>
            <div>
              <p className="mx-2" style={{ marginTop: "5px" }}>
                <b>Day</b>
              </p>
            </div>
            <div>
              <Form.Group className="mb-3">
                <Form.Control type="text" className="input-field" />
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
            <Form.Control type="date" className="input-field" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <b>Price</b>
            </Form.Label>
            <Form.Control type="text" className="input-field" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <b>Quota</b>
            </Form.Label>
            <Form.Control type="text" className="input-field" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              <b>Description</b>
            </Form.Label>
            <Form.Control as="textarea" rows={3} className="input-field" />
          </Form.Group>
          <Form.Label>
            <b>Image</b>
          </Form.Label>
          <Form.Group controlId="formFile" className="mb-3">
            <label className="ml-3">
              {preview && (
                <img
                  style={{ marginTop: "20px", marginBottom: "30px" }}
                  src={preview}
                  alt="receipt"
                />
              )}
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
                onChange={(e) => handleChange(e)}
                accept=".jpg,.jpeg,.png,.svg"
                required
              />
            </label>
          </Form.Group>
        </Form>
        <Button variant="warning" className="button-style">
          <b>Add Trip</b>
        </Button>
      </div>
    </div>
  );
};

export default AddForm;
