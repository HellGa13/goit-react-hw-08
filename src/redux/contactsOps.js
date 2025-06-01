import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = "https://6839762b6561b8d882b07d1d.mockapi.io";

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
    async (_, thunkAPI) => {
      try {
        const res = await axios.get('/contacts');
        return res.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  
  export const addContact = createAsyncThunk(
    'contacts/addContacts',
    async (contact, thunkAPI) => {
      try {
        const res = await axios.post('/contacts', { contact });
        return res.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
      try {
        const res = await axios.delete(`/contacts/${contactId}`);
        return res.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  