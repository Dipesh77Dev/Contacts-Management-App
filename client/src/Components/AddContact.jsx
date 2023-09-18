import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";

const AddContact = () => {
  let navigate = useNavigate();

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phoneNo: "",
  });

  const { name, email, phoneNo } = contact;

  const onInputChange = (e) => {
    console.log(e.target.value);
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5999/api/contacts", contact);
    alert("Your data had been saved successfully & added in our contact list...")
    navigate("/", { replace: true });
  };

  // const [phone, setPhone] = useState("");
  // const handlePhoneChange = (e) => {
  //   const inputValue = e.target.value;
  //   let numericValue = inputValue.replace(/[^0-9]/g, "");
  //   if (inputValue.length > 10) {
  //     inputValue = inputValue.slice(0, 10);
  //   }
  //   setPhone(numericValue);
  // };

  return (
    <>
      <Container className="mt-5">
        <h2 className="text-center mb-4">Add Contact Data</h2>{" "}
        <Form
          onSubmit={onSubmit}
          className="p-5 rounded shadow-lg"
          style={{ background: "rgba(255, 255, 255, 0.9)" }}
        >
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
              autoComplete="off"
              required
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
              autoComplete="off"
              required
            />
          </Form.Group>

          <Form.Group controlId="phoneNo">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="number" // tel
              placeholder="Enter your phone no"
              name="phoneNo"
              value={phoneNo}
              onChange={(e) => onInputChange(e)}
              // onChange={handlePhoneChange}
              autoComplete="off"
              required
              // maxLength={10}
              // pattern="[0-9]{10}"
            />
          </Form.Group>

          <div className="d-flex justify-content-center">
            <Button
              variant="primary"
              type="submit"
              style={{ marginTop: "10px" }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
            >
              Add Contact
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default AddContact;
