import React from "react";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { Report } from 'notiflix/build/notiflix-report-aio';
import { addContacts } from "../../redux/Contacts/contactsOperations";
import { selectContacts } from '../../redux/Contacts/contactsSelectors';
import css from './ContactForm.module.css';


const ContactForm = () => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const handleChange = e => {
        switch (e.target.name) {
            case 'name': setName(e.target.value);
            break;

            case 'number': setNumber(e.target.value);
            break;

            default: return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        
        const normalizedName = name.toLowerCase();
        contacts.find(contact => contact.name.toLowerCase() === normalizedName) 
        ? Report.failure(`${name} is already in contacts `) 
        : dispatch(addContacts({ id: nanoid(), name: name, number: number }))
        // Reset
        setName('');
        setNumber('');
    };

    return (
        <form className={css.contactForm} onSubmit={handleSubmit} >
            <label className={css.contactFormLabel} htmlFor="contactName">
            <input
                className={css.contactFormInput}
                id="contactName"
                type="text"
                name="name"
                placeholder="Ivan Ivanov"
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={handleChange}
            />
            </label>
            

            <label className={css.contactFormLabel} htmlFor="contactNumber">
            <input
                className={css.contactFormInput}
                id="contactNumber"
                type="tel"
                name="number"
                placeholder="+38 000 999 9999"
                mask="+38 050 999 9999"
                required
                pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                value={number}
                onChange={handleChange}
            />
            </label>

            <button className={css.contactFormButton} type="submit">Add contact</button>
        </form>
    );
};

export default ContactForm;