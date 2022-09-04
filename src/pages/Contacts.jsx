import { useSelector, useDispatch } from 'react-redux';

import {
  fetchContacts,
  addContact as addContactAction,
  removeContact,
  updateFilter,
} from '../redux/contactsSlice';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import contactsFilter from 'helpers/contactsFilter';
import css from './Contacts.module.css';
import { useEffect } from 'react';

const Contacts = () => {
  const contacts = useSelector(state => state.contacts.items || []);
  const filter = useSelector(state => state.contacts.filter || '');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleFilterChange = e => {
    dispatch(updateFilter(e.target.value));
  };

  const addContact = (name, number) => {
    dispatch(addContactAction({ name, number }));
  };

  const deleteContact = contactId => {
    dispatch(removeContact(contactId));
  };
  const filteredContacts = contactsFilter(contacts, filter);
  return (
    <div className={css.thumb}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  );
};

export default Contacts;
