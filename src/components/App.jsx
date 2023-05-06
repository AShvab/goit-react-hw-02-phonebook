import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import contacts from '../data/data.json';
import Form from './Form';
import ContactList from './ContactList/ContactList';
import SearchContact from './SearchContact';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    contacts: contacts,
    filter: '',
    name: '',
    number: '',
  };

  addContact = (contact) => {
    const { name } = contact;
    const { contacts } = this.state;

    if (contacts.some((item) => item.name.toLowerCase() === name.toLowerCase())) {
      toast.warning(`${name} is already in contacts`);
      return;
    }

    const newContact = { ...contact };
    newContact.id = nanoid();
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  removeContact = (removeId) =>
    this.setState(({ contacts }) => ({
      contacts: [...contacts].filter(({ id }) => id !== removeId),
    }));

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  searchContact = (event) => {
    const { value } = event.target;
    this.setState({ filter: value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <h1>PhoneBook</h1>
        <Form onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <SearchContact searchContact={this.searchContact} />
        {filteredContacts.length > 0 ? (
          <ContactList
            contacts={filteredContacts}
            removeContact={this.removeContact}
          />
        ) : (
          <p>Contact list is empty</p>
        )}
        <ToastContainer autoClose={5000} />
      </div>
    );
  }
}

export default App;


