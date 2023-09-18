import React, { useEffect, useState } from "react";
import axios from "axios";

import ContactData from "./ContactData";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import { Link, useNavigate } from "react-router-dom";

const ContactList = () => {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  //   const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const result = await axios.get("http://localhost:5999/api/contacts");
      console.log(result);
      setContacts(result.data.data.reverse());
      //   setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const deleteContact = async (_id) => {
    await axios.delete(`http://localhost:5999/api/contacts/${_id}`);
    alert("Your contact has been deleted");
    getData();
  };

  //   if (loading) {
  //     return <p>Loading...</p>;
  //   }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const newSearchUser = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    setContacts(newSearchUser);
  };

//   const handleGoHome = () => {
//     alert("Redirecting to home...");
//     navigate("/");
//   };


const [order, setOrder] = useState("ASC");

const sorting = (col) => {
    if(order === "ASC"){
        const sorted = [...contacts].sort((a,b) => a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1);
        setContacts(sorted)
        setOrder("DESC")
    }
    if(order === "DESC"){
        const sorted = [...contacts].sort((a,b) => a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1);
        setContacts(sorted)
        setOrder("ASC")
    }
}

  return (
    <>
      <div style={{ display: "flex", direction: "column", backgroundColor: "grey"}}>
        <h1 style={{ marginLeft: "180px" }}>
          {" "}
          Contact Details
        </h1>
        <form className="d-flex" onSubmit={handleSearchSubmit} style={{marginLeft: "150px"}}>
          <input
            type="text"
            name="searchInput"
            id="searchInput"
            className="form-control"
            placeholder="Search Contacts"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            style={{width: "400px", height: "40px", marginTop: "7px"}}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-info"
            style= {{marginLeft: "10px", width: "80px", height: "40px", marginTop: "7px"}}
          />
        </form>
        <Link to={"/addContact"}>
          <Button style={{ marginLeft: "170px", marginTop:"7px" }}>Add Contact</Button>
        </Link>
        <Button style={{ marginLeft: "40px", width:"100px", height:"40px", marginTop:"7px" }}>Download</Button>
      </div>
      <p style={{ textAlign: "center", marginTop: "7px" }}>
        Our Total Contacts: <strong>{contacts.length}</strong>
      </p>
      <Table striped bordered hover>
        <thead style={{ textAlign: "center" }}>
          <tr>
            <th>No.</th>
            <th onClick = { () => sorting("name")}>Name</th>
            <th onClick = { () => sorting("email")}>Email</th>
            <th onClick = { () => sorting("phoneNo")}>PhoneNo</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody style={{ textAlign: "center" }}>
          {contacts.length === 0 ? (
            <h3>No Contacts found...</h3>
          ) : (
            <>
              {contacts.map((item, index) => {
                return (
                  <>
                    <tr key={item._id}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phoneNo}</td>
                      <td>
                        <Link
                          style={{ marginRight: 20 }}
                          to={`/viewContact/${item._id}`}
                        >
                          <Button variant="primary">View</Button>
                        </Link>
                        <Link
                          style={{ marginRight: 20 }}
                          to={`/editContact/${item._id}`}
                        >
                          <Button variant="warning">Edit</Button>
                        </Link>
                        <Button
                          variant="danger"
                          onClick={() => deleteContact(item._id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>

                    {/* <ContactData contacts={contacts} /> */}
                  </>
                );
              })}
            </>
          )}
        </tbody>
      </Table>
    </>
  );
};

export default ContactList;




/*
const getData = () => {
    const data = axios.get('http://localhost:5999/api/contacts');
    console.log(data);

    axios.get('http://localhost:5999/api/contacts')
        .then((response) => setContacts(response.data))
        .catch((error) => console.error('Error fetching data:', error));
}


const getAllContactData = () => {
    axios
      .get("http://localhost:5999/api/contacts")
      .then((response) => {
        const getAddData = response.data;
        setContacts(getAddData);
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
*/
