import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Section from '../../components/Section';
import Container from "components/Container";
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import Message from '../../components/Message';
import { fetchContacts } from '../../redux/Contacts/contactsOperations';
import { selectContacts, selectIsLoading, selectError } from '../../redux/Contacts/contactsSelectors';
import { Title, Span } from './Contacts.styled';


const Contacts = () => {
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
        <Container>
          <Title><Span>P</Span>honebook</Title>
          <ContactForm />
        </Container>
      </Section>

      <Section title='Contacts'>
        <Container>
          <Title>Contact<Span>s</Span></Title>
          <Filter />
          {isLoading && !error && <b>Request in progress...</b>}
          {contacts.length > 0 ? <ContactList /> : <Message />}
        </Container>
      </Section>
    </>
  );
}

export default Contacts;