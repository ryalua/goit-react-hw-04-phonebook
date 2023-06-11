import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';

import { AddContact } from './AddContact/AddContact';
import { FormContacts } from './FormContacts/FormContacts';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleContact = ({ id, name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (this.state.contacts.some(contact => contact.name === name)) {
      toast.error(`${name} is allready in contacts! `, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));

    toast.success(`Contact of ${name} successfully added!`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  handleQuery = filter => {
    this.setState({ filter: filter });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    return (
      <>
        <Section title={'Phonebook'}>
          <FormContacts onAddContact={this.handleContact} />
        </Section>
        <Section title={'Contacts'}>
          <Filter onFilter={this.handleQuery} />
          <AddContact
            contacts={this.state.contacts}
            filter={this.state.filter}
            onDelete={this.deleteContact}
          />
        </Section>
        <ToastContainer />
      </>
    );
  }
}
