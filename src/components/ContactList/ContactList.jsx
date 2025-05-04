import React from 'react'
import Contact from '../Contact/Contact'
import { useSelector } from 'react-redux';
import s from "./ContactList.module.css"


const ContactList = () => {
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filters.name);

const filteredContacts = contacts.filter(contact =>
  contact.name && typeof contact.name === 'string' && contact.name.toLowerCase().includes(filter.toLowerCase())
);
  
  
  
    return (
    <ul className={s.list}>
          {filteredContacts.map( (contact)  => (
             <li className={s.item} key={contact.id}>
            <Contact contact={contact} />
          </li>
      ))}
    </ul>
  )
}

export default ContactList