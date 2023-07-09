import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContacts } from '../../redux/operations';
import { selectContacts, selectFilter } from '../../redux/selectors';
import { ContactListUl, ContactListItem, ContactListText, ContactListBtn } from './ContactList.styled';

const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const onDelete = contactId => { dispatch(deleteContacts(contactId)) };

    const normalizedFilter = filter.toLowerCase();
    const getVisibleContact = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    
    return (
        <>
            <ContactListUl>
                {getVisibleContact.map((contact) => (
                    <ContactListItem key={contact.id} >
                        <ContactListText>{contact.name}: {contact.number}</ContactListText>
                        <ContactListBtn 
                            type="button" 
                            onClick={() => onDelete(contact.id)} 
                        >Delete</ContactListBtn>
                    </ContactListItem>
                ))}
            </ContactListUl>
        </>
    );
}

export default ContactList;