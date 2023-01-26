import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { FilterInput, FilterLabel } from './Filter.stayled';

import { hendleChangeContact } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
export const Filter = () => {
  const dispatch = useDispatch();

  const value = useSelector(selectFilter);

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
