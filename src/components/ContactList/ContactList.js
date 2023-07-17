import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContacts } from '../../redux/Contacts/contactsOperations';
import { selectContacts } from '../../redux/Contacts/contactsSelectors';
import { selectFilter } from '../../redux/Filter/filterSelectors';
import css from './ContactList.module.css';

const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const onDelete = contactId => { dispatch(deleteContacts(contactId)) };

    const normalizedFilter = filter.toLowerCase();
    const getVisibleContact = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    
    return (
        <>
            <ul className={css.contactList}>
                {getVisibleContact.map((contact) => (
                    <li className={css.contactListItem} key={contact.id} >
                        <p className={css.contactListText}>{contact.name}: {contact.number}</p>
                        <button 
                            className={css.contactListButton}
                            type="button" 
                            onClick={() => onDelete(contact.id)} 
                        >Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ContactList;