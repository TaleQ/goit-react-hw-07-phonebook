import PropTypes from 'prop-types';
import { ContactItem, DeleteButton } from './ContactListItem.styled';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';

export const ContactListItem = ({ contacts }) => {
  const dispatch = useDispatch();
  const handleClick = e => {
    dispatch(removeContact(e.target.id));
  };

  return contacts.map(contact => (
    <ContactItem key={contact.id}>
      <span>{contact.name}</span>
      <span>{contact.number}</span>
      <DeleteButton id={contact.id} onClick={handleClick}>
        Delete
      </DeleteButton>
    </ContactItem>
  ));
};

ContactListItem.propTypes = {
  contacts: PropTypes.array,
};
