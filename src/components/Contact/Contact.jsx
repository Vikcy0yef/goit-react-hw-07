import React from 'react';
import s from "./Contact.module.css"
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id))
  }

  return (
    
    <li className={s.item} >
      <div className={s.contact}>
     <span className={s.desc}> {contact.name}:</span> 
      <span className={s.desc}>{contact.number}</span>
      </div>
        <button className={s.button} onClick={handleDelete}>Delete</button>
    </li>
   
  );
};

export default Contact;