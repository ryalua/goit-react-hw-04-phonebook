import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyledForm,
  FormLabel,
  LabelName,
  FormBtn,
} from './FormContactsStyled';

export class FormContacts extends Component {
  state = {
    name: '',
    number: '',
  };
  handleInput = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onAddContact(this.state);
    this.setState({ name: '', number: '' }); // сброс полей формы
  };

  render() {
    return (
      <>
        <StyledForm onSubmit={this.handleSubmit}>
          <FormLabel className="form-label">
            <LabelName className="label-name">Name</LabelName>
            <input
              type="text"
              name={'name'}
              value={this.state.name}
              onChange={event => this.handleInput(event)}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <LabelName className="label-name">Number</LabelName>
            <input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={event => this.handleInput(event)}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </FormLabel>
          <FormBtn type="submit" className="form-btn">
            Add contact
          </FormBtn>
        </StyledForm>
      </>
    );
  }
}

FormContacts.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
