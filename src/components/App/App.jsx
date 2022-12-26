import React, { Component } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm";
import Contacts from "./Contacts";
import Filter from "./Filter";
import { DivBox, TitleBox, SecondaryTitleBox } from "./AppStyled";


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  componentDidMount() {
    const contactsInLocalStorage = JSON.parse(localStorage.getItem('contacts'));

    if (contactsInLocalStorage)
      this.setState({ contacts: contactsInLocalStorage });
  }

  componentDidUpdate(prevProps, prevState) {

    if (this.state.contacts !== prevState.contacts)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }


  addContact = ({ name, number }) => {

    const { contacts } = this.state;
    const findContact = contacts.find((contact) => contact.name === name);

    if (findContact) {
      alert(`${this.state.name} is already in contacts`);
      return;
    }


    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({

      contacts: [newContact, ...prevState.contacts],

    }
    )
    )
  };


  serchingFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  }


  removeContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }


  chekingContacts = () => {
    const { contacts, name } = this.state;
    const findContact = contacts.find((contact) => contact.name === name);

    if (findContact) {
      alert(`${this.state.name} is already in contacts`);
    }
  };



  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <DivBox>

        <TitleBox>Phonebook</TitleBox>

        <ContactForm onSubmit={this.addContact} />

        <SecondaryTitleBox>Contacts</SecondaryTitleBox>

        <Filter
          filterValue={this.state.filter}
          onChange={this.serchingFilter} />

        <Contacts
          contacts={visibleContacts}
          onClick={this.removeContact}
        />
      </DivBox>
    );
  }
}


