import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

const setAuthHeader = (value) => {
  axios.defaults.headers.common.Authorization = value;
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 *
 * After successful registration, add the token to the HTTP header
 */
export const register = createAsyncThunk("auth/register", async (values, thunkAPI) => {
  try {
    const res = await axios.post("/users/signup", values);
    setAuthHeader(`Bearer ${res.data.token}`);
    return res.data;
  } catch (error) {
    if (error.response?.data?.code === 11000) {  // Код MongoDB для дубльованого запису
      return thunkAPI.rejectWithValue("Email уже використовується. Спробуй інший.");
    }
    return thunkAPI.rejectWithValue(error.response?.data || "Невідома помилка");
  }
});

/*
 * POST @ /users/login
 * body: { email, password }
 *
 * After successful login, add the token to the HTTP header
 */
export const logIn = createAsyncThunk("auth/login", async (values) => {
  const res = await axios.post("/users/login", values);
  setAuthHeader(`Bearer ${res.data.token}`);
  return res.data;
});

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 *
 * After a successful logout, remove the token from the HTTP header
 */
export const logOut = createAsyncThunk("auth/logout", async () => {
  await axios.post("/users/logout");
  setAuthHeader("");
});

/*
 * GET @ /users/me
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    try {
      setAuthHeader(persistedToken);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;

      return persistedToken !== null;
    },
  }
);