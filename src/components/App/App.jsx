import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Section from '../Section';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import Filter from '../Filter';
import Message from '../Message';
import { fetchContacts } from '../../redux/operations';
import { selectContacts, selectIsLoading, selectError } from '../../redux/selectors';
import { Title, Span } from './App.styled';


const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section title='Phonebook'>
        <Title><Span>P</Span>honebook</Title>
        <ContactForm />
      </Section>
      <Section title='Contacts'>
        <Title>Contact<Span>s</Span></Title>
        <Filter />
        {isLoading && !error && <b>Request in progress...</b>}
        {contacts.length > 0 ? <ContactList /> : <Message />}
      </Section>
    </>
  );
}

export default App;