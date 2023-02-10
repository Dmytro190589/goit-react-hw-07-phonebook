import css from './App.module.css';
import ContactForm from './ContactsForm/ContactsForm';
import Filter from './Filter/Filter';
import ContactList from './ContactsList/ContactsList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getContacts,
  getError,
  getFilter,
  getIsLoading,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { PulseLoader } from 'react-spinners';

export default function App() {
  const override = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
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
      {isLoading && <PulseLoader color="#9789c1" cssOverride={override} />}
      {error && <b style={{ color: 'red', textAlign: 'center' }}>{error}</b>}
      <ContactList contacts={result} />
    </div>
  );
}
