import { createSlice } from '@reduxjs/toolkit';

import { nanoid } from 'nanoid';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  isLoading: false,
  error: null,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: initialState,

  reducers: {
    submitContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    hendleDeleteContact: {
      reducer(state, action) {
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload
        );
      },
    },
    hendleChangeContact: {
      reducer(state, { payload }) {
        state.filter = payload;
      },
    },
  },
});

export default contactsSlice.reducer;

export const { submitContact, hendleChangeContact, hendleDeleteContact } =
  contactsSlice.actions;
