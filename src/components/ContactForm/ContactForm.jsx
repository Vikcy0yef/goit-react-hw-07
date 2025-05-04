import React from 'react'
import { nanoid } from 'nanoid'
import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from "yup"
import { addContact } from '../../redux/contactsSlice';
import s from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useId } from 'react';




const validationSchema = Yup.object({
  name: Yup.string()
    .min(3)
    .max(50)
    .required('Name is required'),
  number: Yup.string()
    .min(3)
    .max(50)
    .required('Number is required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameId = useId();
  const numberId = useId();

    const contacts = useSelector(state => state.contacts.items); 
    
const handleSubmit = (values, actions) => {
  const normalizedName = values.name.toLowerCase();
  const isDuplicate = contacts.some(
    contact =>
      typeof contact.name === 'string' &&
      contact.name.toLowerCase() === normalizedName
  );

  if (isDuplicate) {
    alert(`${values.name} is already in contacts.`);
    return;
  }

  dispatch(
    addContact({
      id: nanoid(),
      name: values.name,
      number: values.number,
    })
  );

  actions.resetForm();
};
  const handleNumberInput = (e) => {
    const value = e.target.value;
    const cursorPosition = e.target.selectionStart;

    if (e.key === "+" && cursorPosition !== 0) {
      e.preventDefault();
      return;
    }

    if (!/[0-9+]/.test(e.key) || (e.key === "+" && value.includes("+"))) {
      e.preventDefault();
    }
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