import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import PropTypes from "prop-types";

export default function ContactList({ contacts, deleteContact }) {
  return (
    <ul className="list">
      {contacts.map((item) => (
        <ContactItem
          deleteContact={() => deleteContact(item.id)}
          key={item.id}
          name={item.name}
          number={item.number}
        />
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
