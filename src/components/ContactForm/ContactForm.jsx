import "./ContactForm.scss";
import { nanoid } from "nanoid";
import { info } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import React, { Component } from "react";
import PropTypes from "prop-types";

const INITIAL_STATE = {
  name: "",
  number: "",
};

class ContactForm extends Component {
  state = {
    ...INITIAL_STATE,
  };

  nameId = nanoid();
  numberId = nanoid();

  reset = () => this.setState({ ...INITIAL_STATE });

  onInputHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    const { contacts } = this.props;
    if (!contacts.find((item) => item.name === this.state.name)) {
      const contactData = { name: this.state.name, number: this.state.number, id: nanoid() };
      this.props.onSubmitHandler(contactData);
      this.reset();
    } else {
      info({ text: `${this.state.name} is already in contacts.`, delay: 700 });
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmitHandler}>
        <label className="form__title" htmlFor={this.nameId}>
          <h3 className="phonebook__headline">Name</h3>
          <input
            className="form__input"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.nameId}
            value={this.state.name}
            onChange={this.onInputHandler}
          />
        </label>
        <label className="form__title" htmlFor={this.numberId}>
          <h3 className="phonebook__headline">Number</h3>
          <input
            className="form__input"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.numberId}
            value={this.state.number}
            onChange={this.onInputHandler}
          />
        </label>
        <button className="form__submit" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;

ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  onSubmitHandler: PropTypes.func.isRequired,
};
