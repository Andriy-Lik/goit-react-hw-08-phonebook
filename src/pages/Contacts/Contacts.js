import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Section from '../../components/Section';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import Message from '../../components/Message';
import { fetchContacts } from '../../redux/Contacts/contactsOperations';
import { selectContacts, selectIsLoading, selectError } from '../../redux/Contacts/contactsSelectors';
import css from './Contacts.module.css';


const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.contacts}>
      <Section title='Phonebook'>
        <div className={css.contactsContainer}>
          <h2 className={css.contactsTitle}><span className={css.contactsLetter}>P</span>honebook</h2>
          <ContactForm />
        </div>
      </Section>

      <Section title='Contacts'>
        <div className={css.contactsContainer}>
          <h2 className={css.contactsTitle}>Contact<span className={css.contactsLetter}>s</span></h2>
          <Filter />
          {isLoading && !error && <b>Request in progress...</b>}
          {contacts.length > 0 ? <ContactList /> : <Message />}
        </div>
      </Section>
    </div>
  );
}

export default Contacts;