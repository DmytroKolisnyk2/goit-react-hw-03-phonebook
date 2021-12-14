import React from "react";
import "./ContactItem.scss";
import PropTypes from "prop-types";

export default function ContactItem({ name, number, deleteContact }) {
  return (
    <li className="list__item">
      <p className="list__text">
        <span>{name} :</span> {number}
      </p>
      <button className="list__btn" onClick={deleteContact} type="button">
        Delete
      </button>
    </li>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};