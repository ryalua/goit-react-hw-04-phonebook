import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledForm,
  FormLabel,
  LabelName,
  FormBtn,
} from './FormContactsStyled';

export function FormContacts({ onAddContact }) {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
  });
  // const { name, number } = formData;
  const handleInput = event => {
    setFormData({
      ...formData,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    onAddContact(formData);
    setFormData({ name: '', number: '' }); // сброс полей формы
  };

  return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
        <FormLabel className="form-label">
          <LabelName className="label-name">Name</LabelName>
          <input
            type="text"
            name={'name'}
            value={formData.name}
            onChange={event => handleInput(event)}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <LabelName className="label-name">Number</LabelName>
          <input
            type="tel"
            name="number"
            value={formData.number}
            onChange={event => handleInput(event)}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <FormBtn type="submit" className="form-btn">
          Add contact
        </FormBtn>
      </StyledForm>
    </div>
  );
}

FormContacts.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
