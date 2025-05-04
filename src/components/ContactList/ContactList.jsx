import React from 'react'
import Contact from '../Contact/Contact'
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/contactsSlice';
import s from "./ContactList.module.css"


const ContactList = () => {
    
const filteredContacts = useSelector(selectFilteredContacts)
  
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