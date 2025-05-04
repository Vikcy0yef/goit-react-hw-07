import React from 'react';
import s from "./Contact.module.css"
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id))
  }

  return (
    
    <div className={s.item} >
      <div className={s.contact}>
     <span className={s.desc}> {contact.name}:</span> 
      <span className={s.desc}>{contact.number}</span>
      </div>
        <button className={s.button} onClick={handleDelete}>Delete</button>
    </div>
   
  );
};

export default Contact;