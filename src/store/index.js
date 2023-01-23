import { configureStore, combineReducers } from '@reduxjs/toolkit';

import contactReducer from './contactSlice';

import { filtersReducer } from './filterSlice';

const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filtersReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
