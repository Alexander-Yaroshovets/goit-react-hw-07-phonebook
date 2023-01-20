import { useSelector, useDispatch } from 'react-redux';

import { hendleDeleteContact } from 'store/contactSlice';

import PropTypes from 'prop-types';

import {
  ContactName,
  ContactTitle,
  CotactList,
  ContactButton,
  ContactItem,
  ContactNumber,
} from './Contacts.styled';

export const Contacts = ({ title }) => {
  const contacts = useSelector(state => state.contacts.contacts);

  const dispatch = useDispatch();

  const filterValue = useSelector(state => state.contacts.filter);

  const getFilterdContact = () => {
    const normalizedFilter = filterValue.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilterdContact();

  return (
    <>
      <ContactTitle>{title}</ContactTitle>

      <CotactList>
        {contacts &&
          filteredContacts.map(({ id, name, number }) => {
            return (
              <ContactItem key={id}>
                <ContactName>{name}:</ContactName>
                <ContactNumber>{number}</ContactNumber>
                <ContactButton
                  type="button"
                  onClick={() => dispatch(hendleDeleteContact(id))}
                >
                  delete
                </ContactButton>
              </ContactItem>
            );
          })}
      </CotactList>
    </>
  );
};

Contacts.propTypes = {
  title: PropTypes.string.isRequired,
};
