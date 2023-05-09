import { Wrapper, Thumb } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { contactsSelector } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(contactsSelector);

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length ? <Filter /> : null}
      {contacts.length ? (
        <ContactList />
      ) : (
        <Thumb>
          <p>There are no contacts yet</p>
        </Thumb>
      )}
    </Wrapper>
  );
};
