import css from "./Contact.module.css";
import { RiContactsFill } from 'react-icons/ri';
import { FaPhoneAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export default function Contact({ data: { id, name, number }}) {
  const dispatch = useDispatch();

  const handleDelete = () => { dispatch(deleteContact(id)) };
  
  return (
    <div className={css.container}>
      <div>
        <p>
          <RiContactsFill className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}