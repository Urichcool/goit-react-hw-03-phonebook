import {
  ContactsListItem,
ContactsDeleteButton
} from './App,styled';
import PropTypes from 'prop-types';



const AppContactsItem = ({ name, number, id, setContact }) => {
  return (
    <ContactsListItem>
      {name}: {number}
      <ContactsDeleteButton onClick = {() => setContact(id)}>Delete</ContactsDeleteButton>
          </ContactsListItem>
        )
  ;
};

export default AppContactsItem;

AppContactsItem.propTypes = {
    name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  setContact: PropTypes.func.isRequired
}