import { Form } from './Form';

import { Contacts } from './Contacts';

import { Filter } from './Filter';

export const App = () => {
  return (
    <>
      <Form title="Phonebook" />
      <Filter />
      <Contacts title="MyContacts" />
    </>
  );
};
