import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filterName = useSelector(state => state.filters.name);

  const filteredcontacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <ul className={css.container}>
      {filteredcontacts.length === 0 && <li>No contacts found.</li>}
      {filteredcontacts.map(contact => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}