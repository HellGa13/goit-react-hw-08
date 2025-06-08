import { Contact } from '../Contact/Contact';
import style from './ContactList.module.css';

import { memo } from 'react';

export const ContactList = memo(({ contacts, onDelete }) => {
  return (
    <ul className={style.container}>
      {contacts.length === 0 && <li>No contacts found.</li>}
      {contacts.map(contact => (
        <li className={style.list} key={contact.id}>
          <Contact
            contact={contact}
            onDelete={() => onDelete(contact.id)}
          />
        </li>
      ))}
    </ul>
  );
});