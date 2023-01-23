import { useSelector, useDispatch } from 'react-redux';

import { deleteContact } from 'store/operations';

import { selectContacts, selectFilter } from 'store/selectors';

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
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const filterValue = useSelector(selectFilter);

  const getFilterdContact = () => {
    const normalizedFilter = filterValue.toLowerCase();

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  const filteredContacts = getFilterdContact();

  return (
    <>
      <ContactTitle>{title}</ContactTitle>

      <CotactList>
        {contacts.length > 0 &&
          filteredContacts.map(({ id, name, phone }) => {
            return (
              <ContactItem key={id}>
                <ContactName>{name}:</ContactName>
                <ContactNumber>{phone}</ContactNumber>
                <ContactButton
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
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
