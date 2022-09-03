import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../constants';

export const registerAction = createAsyncThunk(
  'auth/registerAction',
  async (payload, {rejectWithValue}) => {
    try {
      const response = await fetch(`${BASE_URL}/users/signup`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      const data = await response.json();

      return data.errors ? rejectWithValue(data) : data;
    } catch(err) {
      return rejectWithValue(err);
    }
  }
);

export const loginAction = createAsyncThunk(
  'auth/loginAction',
  async (payload, {rejectWithValue}) => {
    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.status !== 200) {
        return rejectWithValue({message: 'login failed'});
      }

      const data = await response.json();

      return data.errors ? rejectWithValue(data) : data;
    } catch(err) {
      return rejectWithValue(err);
    }
  }
);

export const logoutAction = createAsyncThunk(
  'auth/logoutAction',
  async (payload, {rejectWithValue, getState}) => {
    try {
      const {auth} = getState();
      const response = await fetch(`${BASE_URL}/users/logout`, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
          'Authorization': auth.token
        }
      });
      const data = await response.json();

      return data.errors ? rejectWithValue(data) : data;
    } catch(err) {
      return rejectWithValue(err);
    }
  }
);

export const autoLoginAction = createAsyncThunk(
  'auth/autoLoginAction',
  async (payload, {rejectWithValue, getState}) => {
    try {
      const {auth} = getState();
      if (!auth.token) {
        return rejectWithValue();
      }

      const response = await fetch(`${BASE_URL}/users/current`, {
        method: 'get',
        headers: {
          'Authorization': auth.token
        }
      });
      const data = await response.json();
      return data.errors ? rejectWithValue(data) : data;
    } catch(err) {
      return rejectWithValue(err);
    }
  }
);
