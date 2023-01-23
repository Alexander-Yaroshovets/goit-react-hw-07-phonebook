import { Form } from './Form';

import { Contacts } from './Contacts';

import { Filter } from './Filter';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Form title="Phonebook" />
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      <Contacts title="MyContacts" />
    </>
  );
};
