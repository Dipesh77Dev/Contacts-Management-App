import React from "react";

const ContactData = ({ contacts }) => {
  if (contacts.length > 0) {
    return (
      <>
        {contacts.map((contact, index) => {
          console.log(contact);
        })}
      </>
    );
  } else {
    return <h3>No Contacts found...</h3>;
  }
};

export default ContactData;

/* 
<tbody>
{
    contacts.map((contact, index) => (
        <tr key={contact._id}>
            <td>{index}</td>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.phoneNo}</td>
        </tr>
    ))
}
</tbody> 
*/
