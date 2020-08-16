import React, { Component } from "react";
import Form from "./components/contactsForm/Form";
import Contacts from "./components/contacts/Contacts";
import Filter from "./components/filter/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],

    filter: "",
  };

  componentDidMount() {
    const persistedContacts = localStorage.getItem("contacts");
    if (persistedContacts) {
      this.setState({
        contacts: JSON.parse(persistedContacts),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  deleteContact = (id) => {
    const { contacts } = this.state;
    this.setState({
      contacts: contacts.filter((contact) => contact.id !== id),
    });
  };

  getFilterValue = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFilteredData = () => {
    return this.state.filter
      ? this.state.contacts.filter((contact) =>
          contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
        )
      : this.state.contacts;
  };

  addContact = (contact) => {
    this.setState({ contacts: [...this.state.contacts, contact] });
  };
  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <h2> Phonebook</h2>
        <Form contacts={contacts} addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} getFilterValue={this.getFilterValue} />
        <Contacts
          deleteContact={this.deleteContact}
          contacts={this.getFilteredData()}
        />
      </>
    );
  }
}

export default App;
