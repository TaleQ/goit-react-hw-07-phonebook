import { useSelector } from 'react-redux';
import { StyledContactList } from './ContactList.styled';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { contactsSelector, filterSelector } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(contactsSelector);
  const filterValue = useSelector(filterSelector);
  const filtredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );

  return (
    <StyledContactList>
      <ContactListItem contacts={filtredContacts} />
    </StyledContactList>
  );
};
