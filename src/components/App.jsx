import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Container } from './App.styled';
import {ContactForm} from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../redux/selector';
import { addContact, deleteContact } from '../redux/phonebook/contacts/sliceContact';



export const App = () => {

  const dispatch = useDispatch();
  const getContact = useSelector(getFilter)



  const handleAddContact = (name, number) => {
    dispatch(addContact({ name: name, id: nanoid(), number: number }));
    
  };
  
  const removeContact = id => {
    dispatch(deleteContact(id));
  };
  

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />

      <h2>Contacts</h2>
      <Filter />
      <ContactList
        contacts={getContact}
        onDelete={removeContact}
      />
    </Container>
  );
};