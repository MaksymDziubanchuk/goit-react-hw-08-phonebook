import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './contactsActions';

const initialState = {
  items: [],
  filter: ''
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      state.filter = action.payload;
    }
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, {payload}) => {
      state.items = payload.map(({createdAt, ...item}) => item);
    }
  }
});

export const { updateFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
