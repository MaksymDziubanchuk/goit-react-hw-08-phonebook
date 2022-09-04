


export default function contactsFilter(contacts, filter){
    const searchContact = filter.toLowerCase();
const filteredContacts = contacts
  .filter(contact => contact.name.toLowerCase().includes(searchContact))
  .sort((firstContact, secondContact) =>
    firstContact.name.localeCompare(secondContact.name)
  );
  return filteredContacts;
}
