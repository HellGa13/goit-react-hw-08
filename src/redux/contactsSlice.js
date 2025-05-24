import { createSlice } from '@reduxjs/toolkit';
import initContacts from '../contacts.json';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: initContacts,
  },
  reducers: {
    addContact: (state, action) => {
        state.items.push(action.payload);
    },
    
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;
