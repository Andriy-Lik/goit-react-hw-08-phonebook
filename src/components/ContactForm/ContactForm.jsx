import React from "react";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import { Report } from 'notiflix/build/notiflix-report-aio';
import { addContacts } from "../../redux/operations";
import { selectContacts } from '../../redux/selectors';
import { Form, FormLabel, FormInput, FormButton } from './ContactForm.styled';


const ContactForm = () => {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const nameInpudId = nanoid();
    const numberInpudId = nanoid();
    
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
        <Form onSubmit={handleSubmit} >
            <FormLabel htmlFor={nameInpudId}>Name</FormLabel>
            <FormInput
                type="text"
                name="name"
                placeholder="Enter name"
                id={nameInpudId}
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={handleChange}
            />

            <FormLabel htmlFor={numberInpudId}>Number</FormLabel>
            <FormInput
                type="tel"
                name="number"
                placeholder="Enter phone number"
                id={numberInpudId}
                required
                pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                value={number}
                onChange={handleChange}
            />

            <FormButton type="submit">Add contact</FormButton>
        </Form>
    );
};

export default ContactForm;