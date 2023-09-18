import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const ViewContact = () => {
  const BASE_URL = "https://contact-app-dzad.onrender.com"

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phoneNo: "",
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    // const res = await axios.get(`http://localhost:5999/api/contacts/${id}`);
    const res = await axios.get(`${BASE_URL}/api/contacts/${id}`);
    setContact(res.data.data);
  };

  return (
    <>
      <div className="container py-4">
        <h1 className="display-4">Contact Id: {id}</h1>
        <hr />
        <ul className="list-group w-50">
          <li className="list-group-item">Name: {contact.name}</li>
          <li className="list-group-item">Email: {contact.email}</li>
          <li className="list-group-item">Phone Number: {contact.phoneNo}</li>
        </ul>

        <Link className="btn btn-primary mt-4" to="/">
          Back to Home
        </Link>
      </div>
    </>
  );
};

export default ViewContact;
