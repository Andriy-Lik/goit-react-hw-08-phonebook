import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContacts } from '../../redux/Contacts/contactsOperations';
import { selectContacts } from '../../redux/Contacts/contactsSelectors';
import { selectFilter } from '../../redux/Filter/filterSelectors';
import { ReactComponent as Bin } from '../../images/Bin.svg';
import { ReactComponent as Pencil } from '../../images/Pencil.svg';
import { ReactComponent as User } from '../../images/User.svg';
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
                        <p className={css.contactListText}>
                            <User className={css.contactListIcon} />
                            <span className={css.contactListName}>{contact.name}</span> 
                            <span className={css.contactListNumber}>{contact.number}</span>
                        </p>
                        <div className={css.buttonBox}>
                            <button className={css.contactListButton} type="button">
                                <Pencil className={css.contactListIcon} />
                            </button>
                            <button 
                                className={css.contactListButton}
                                type="button" 
                                onClick={() => onDelete(contact.id)} 
                            >
                                <Bin className={css.contactListIcon} />
                            </button>
                        </div>
                        
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ContactList;