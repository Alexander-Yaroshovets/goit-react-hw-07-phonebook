import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { submitContact } from 'store/contactSlice';

import {
  ContactForm,
  FormInput,
  FormLabel,
  FormTitle,
  FormButton,
} from './Form.styled';

export const Form = ({ title }) => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts);

  const [name, setname] = useState('');
  const [number, setnumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setname(value);
        break;
      case 'number':
        setnumber(value);
        break;
      default:
        return;
    }

    contacts &&
      contacts.find(contact => {
        if (contact.name.toLowerCase() === value.toLowerCase()) {
          alert(`${value} is olredy in contact`);
        }
        switch (name) {
          case 'name':
            setname(value);
            break;
          case 'number':
            setnumber(value);
            break;
          default:
        }
        return name;
      });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(submitContact(name, number));
    reset();
  };

  const reset = () => {
    setname('');
    setnumber('');
  };

  return (
    <>
      <FormTitle>{title}</FormTitle>
      <ContactForm onSubmit={handleSubmit}>
        <FormLabel>
          Name
          <FormInput
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleInputChange}
          />
        </FormLabel>

        <FormLabel>
          Number
          <FormInput
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleInputChange}
          />
        </FormLabel>

        <FormButton type="submit">add contact</FormButton>
      </ContactForm>
    </>
  );
};
