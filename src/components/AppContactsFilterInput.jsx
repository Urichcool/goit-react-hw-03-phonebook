import { Component } from "react";
import {ContactsListLabel,
    ContactsFilterInput
} from './App,styled'
import PropTypes from 'prop-types';
 
let inputValue = ''
  
class AppContactsInput extends Component {
  static propTypes = {
    filter: PropTypes.func.isRequired,
  };

  
  handleInputChange = e => {
    inputValue = e.currentTarget.value;
    this.props.filter(inputValue)
  };


  render() {
    return (
      <ContactsListLabel>
        Find contacts by name
        <ContactsFilterInput
          type="text"
          name="filter"
          value={inputValue}
          onChange={this.handleInputChange}
        ></ContactsFilterInput>
      </ContactsListLabel>
    );
  }
}
 
 export default AppContactsInput