import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";

const EditContact = () => {
  let navigate = useNavigate();
  const { id } = useParams();

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phoneNo: "",
  });

  const { name, email, phoneNo } = contact;

  const onInputChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5999/api/contacts/${id}`, contact);
    alert("Your data had been updated");
    navigate("/");
  };

  const loadContact = () => {
    axios.get(`http://localhost:5999/api/contacts/`+ id)
    .then(res => {
      console.log(res);
      setContact({...contact, name: res.data.data.name, email: res.data.data.email, phoneNo: res.data.data.phoneNo})
    })
    .catch(err => console.log(err))
  };

  useEffect(() => {
    loadContact();
  }, []);

  return (
    <>
      <Container className="mt-5">
        <h2 className="text-center mb-4">Update Contact Data</h2>
        <Form
          onSubmit={(e) => onSubmit(e)}
          className="p-5 rounded shadow-lg"
          style={{ background: "rgba(255, 255, 255, 0.9)" }}
        >
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Update your name"
              name="name"
              // value={name}
              value={contact.name}
              onChange={(e) => onInputChange(e)}
              autoComplete="off"
            />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Update your email"
              name="email"
              value={contact.email}
              onChange={(e) => onInputChange(e)}
              autoComplete="off"
            />
          </Form.Group>

          <Form.Group controlId="phoneNo">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Update your phone no"
              name="phoneNo"
              value={phoneNo}
              onChange={(e) => onInputChange(e)}
              autoComplete="off"
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
              Update Contact
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default EditContact;
