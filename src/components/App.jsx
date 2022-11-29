import { Component } from "react";
import {
  ContactsContainer,
  PhoneBookTitle,
  ContactsApp,
  ContactsTitle
} from "./App,styled";
import AppAddContactsForm from "./AppAddContactsForm";
import AppContactsList from "./AppContactsList";
import AppContactsInput from "./AppContactsFilterInput";




export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = data => {
   this.setState({
     contacts: this.state.contacts.concat(data),
   });
}

  formInputHandler = data => {
    this.setState({ filter: data });
  };

  setContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    const parsedContacts = JSON.parse(contacts)
    if (parsedContacts) {
       this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  render() {
    return (
      <ContactsContainer>
        <ContactsApp>
          <PhoneBookTitle>Phonebook</PhoneBookTitle>
          <AppAddContactsForm
            onSubmit={this.formSubmitHandler}
            contacts={this.state.contacts}
          />
          {this.state.contacts.length !== 0 && (
            <div>
              <ContactsTitle>Contacts</ContactsTitle>
              <AppContactsInput filter={this.formInputHandler} />
              <AppContactsList
                contacts={this.state.contacts}
                filter={this.state.filter}
                setContact={this.setContact}
              />
            </div>
          )}
        </ContactsApp>
      </ContactsContainer>
    );
  }
};
