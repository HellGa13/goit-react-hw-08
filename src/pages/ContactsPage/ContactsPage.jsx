import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  selectError,
  selectIsLoading,
  selectFilteredContacts,
  selectLastFetched,
} from '../../redux/contacts/selectors';
import { fetchContacts, addContact } from '../../redux/contacts/operations';

import { ContactForm } from '../../components/ContactForm/ContactForm.jsx';
import { SearchBox } from '../../components/SearchBox/SearchBox.jsx';
import { ContactList } from '../../components/ContactList/ContactList';
import { formatPhoneNumber } from '../../utils.js';
import toast, { Toaster } from 'react-hot-toast';
import style from './ContactsPage.module.css';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const toastOptions = {
    duration: 4000,
    position: 'top-right',
  };

  const toasts = {
    add: () => toast.success('Contact added successfully!', toastOptions),
    fail: () =>
      toast.error("Sorry, we're encountered an error! Try again later!", toastOptions),
  };

  const handleAdd = contact => {
    dispatch(
      addContact({
        name: contact.name,
        number: formatPhoneNumber(contact.number),
      })
    )
      .unwrap()
      .then(() => toasts.add())
      .catch(() => toasts.fail());
  };

  const lastFetched = useSelector(selectLastFetched);
  useEffect(() => {
    const timeFrame = 5 * 60 * 1000; // 5 minutes
    if (!lastFetched || Date.now() - lastFetched > timeFrame) {
      dispatch(fetchContacts());
    }
  }, [dispatch, lastFetched]);

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div className={style.container}>
      <div className={style.controlls}>
        <SearchBox />
      </div>
      {isLoading && !error && (
        <div>
          <p className={style.loader}>Loading...</p>
        </div>
      )}
      {error && <p className={style.error}>{error}</p>}
      <ContactForm onSubmit={handleAdd} />
      <ContactList contacts={filteredContacts} />
      <Toaster
        toastOptions={{
          className: 'themedToaster',
        }}
      />
    </div>
  );
}