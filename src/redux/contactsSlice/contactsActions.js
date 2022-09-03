import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../constants';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (payload, {getState}) => {
    const {auth} = getState();
    const response = await fetch(`${BASE_URL}/contacts`, {
      method: 'get',
      headers: {
        Authorization: auth.token
      }
    })
    const data = await response.json();
    return data
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (payload, {dispatch, getState}) => {
    const {auth} = getState();
    await fetch(`${BASE_URL}/contacts`, {
      method: 'post',
      headers: {
        'content-type': 'application/json',
        Authorization: auth.token
      },
      body: JSON.stringify(payload)
    });

    dispatch(fetchContacts());
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (id, {dispatch, getState}) => {
    const {auth} = getState();
    await fetch(`${BASE_URL}/contacts/${id}`, {
      method: 'delete',
      headers: {
        Authorization: auth.token
      },
    });

    dispatch(fetchContacts());
  }
);
