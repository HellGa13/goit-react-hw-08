import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from 'use-debounce';
import { changeFilter } from '../../redux/filtersSlice';
import { useState, useEffect } from 'react';

export default function SearchBox() {
  const dispatch = useDispatch();
  const nameSearch = useSelector((state) => state.filters.name);

  const [newName, setNewName] = useState(nameSearch || '');
  const [debouncedName] = useDebounce(newName, 300);

  const handleChange = e => {
    setNewName(e.target.value);
  };

  useEffect(() => {
    dispatch(changeFilter(debouncedName));
  }, [debouncedName, dispatch]);

  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={newName}
        onChange={handleChange}
        className={css.field}
      />
    </div>
  );
};