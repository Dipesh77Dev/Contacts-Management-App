import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ContactList from "./ContactList";
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import ViewContact from "./ViewContact";
import NotFound from "./NotFound";

const MainComp = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<ContactList />} />
          <Route exact path="/addContact" element={<AddContact />} />
          <Route exact path="/editContact/:id" element={<EditContact />} />
          <Route exact path="/viewContact/:id" element={<ViewContact />} />
          <Route path = "*" element = {<NotFound />} />
          {/* <Route exact path="/contact/:id" element={<EditContact />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default MainComp;
