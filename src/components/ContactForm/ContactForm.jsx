import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import s from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string().min(3).max(50).required('Name is required'),
  number: Yup.string().min(3).max(50).required('Number is required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items); 

  const handleSubmit = (values, actions) => {
    const normalizedName = values.name.toLowerCase();
    
    
    const isDuplicate = contacts.some(
      (contact) =>
        contact.name.toLowerCase() === normalizedName
    );

    if (isDuplicate) {
      alert(`${values.name} is already in contacts.`);
      return;
    }

    
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );

    actions.resetForm(); 
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={s.form}>
        <div className={s.label}>
          <label htmlFor="name">Name</label>
          <Field
            className={s.input}
            type="text"
            id="name"
            name="name"
            placeholder="Name contact"
          />
          <ErrorMessage name="name" component="div" className={s.error} />
        </div>
        <div className={s.label}>
          <label htmlFor="number">Phone Number</label>
          <Field
            className={s.input}
            type="text"
            id="number"
            name="number"
            placeholder="Phone number"
          />
          <ErrorMessage name="number" component="div" className={s.error} />
        </div>
        <button className={s.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;