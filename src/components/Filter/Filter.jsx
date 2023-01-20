import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { FilterInput, FilterLabel } from './Filter.stayled';

import { hendleChangeContact } from 'store/contactSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const value = useSelector(state => state.contacts.filter.value);

  const hendelInput = event => {
    dispatch(hendleChangeContact(event.target.value));
  };
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput
        value={value}
        type="text"
        name="filter"
        onChange={hendelInput}
      />
    </FilterLabel>
  );
};
