import { createSlice } from '@reduxjs/toolkit';
import {
  registerAction,
  loginAction,
  logoutAction,
  autoLoginAction
} from './authActions';

const handleError = (state, {payload}) => {
  state.error = payload;
}

const initialState = {
  user: null,
  token: localStorage.getItem('auth-key') || '',
  error: null,
  pending: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [registerAction.fulfilled]: (state, {payload: {token, user}}) => {
      state.user = user;
      state.token = token;
      state.error = null;
      localStorage.setItem('auth-key', token)
    },
    [loginAction.fulfilled]: (state, {payload: {token, user}}) => {
      state.user = user;
      state.token = token;
      state.error = null;
      localStorage.setItem('auth-key', token)
    },
    [logoutAction.fulfilled]: (state, action) => {
      state.user = null;
      state.token = '';
      state.error = null;
      localStorage.removeItem('auth-key')
    },
    [autoLoginAction.pending]: (state) => {
      state.pending = true;
    },
    [autoLoginAction.fulfilled]: (state, {payload}) => {
      state.user = payload;
      state.pending = false;
    },
    [registerAction.rejected]: handleError,
    [loginAction.rejected]: handleError,
    [logoutAction.rejected]: handleError,
    [autoLoginAction.rejected]: (state) => {
      state.token = '';
    }
  }
});

export default authSlice.reducer;
