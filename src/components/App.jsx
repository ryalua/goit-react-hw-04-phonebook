import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';

import { AddContact } from './AddContact/AddContact';
import { FormContacts } from './FormContacts/FormContacts';
import { Section } from './Section/Section';
import { Filter } from './Filter/Filter';
import 'react-toastify/dist/ReactToastify.css';

const toastConfig = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

export function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const handleContact = ({ id, name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.some(contact => contact.name === name)) {
      toast.error(`${name} is allready in contacts! `, toastConfig);
      return;
    }

    setContacts([...contacts, newContact]);

    toast.success(
      `Contact of ${newContact.name} successfully added!`,
      toastConfig
    );
  };

  const handleQuery = filter => {
    setFilter(filter);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <div>
      <Section title={'Phonebook'}>
        <FormContacts onAddContact={handleContact} />
      </Section>
      <Section title={'Contacts'}>
        <Filter onFilter={handleQuery} />
        <AddContact
          contacts={contacts}
          filter={filter}
          onDelete={deleteContact}
        />
      </Section>
      <ToastContainer />
    </div>
  );
}
