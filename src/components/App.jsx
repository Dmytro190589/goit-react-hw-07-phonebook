import css from './App.module.css';
import ContactForm from './ContactsForm/ContactsForm';
import Filter from './Filter/Filter';
import ContactList from './ContactsList/ContactsList';

import { useSelector } from 'react-redux';

export default function App() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const filteredContacts = () => {
    if (filter) {
      return contacts.filter(i =>
        i.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
    return contacts;
  };

  const result = filteredContacts();
  return (
    <div className={css.form}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList contacts={result} />
    </div>
  );
}
