import React from "react";
import { Li, Ul, P, Button } from './ContactList.styled'

const ContactList = ({ contacts, onDeleteContact }) => (
    <Ul>
        {contacts.map(({id, name, number}) => (
        <Li key={id}>
            <P>{name}: {number}</P>
            <Button type="button" onClick={() => onDeleteContact(id)}>Delete</Button>
        </Li>
    ))}
    </Ul>
);

export default ContactList;
