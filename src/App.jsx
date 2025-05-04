import { useState, useEffect } from 'react'
import './App.css'
import Contact from './components/Contact/Contact'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'


function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) ||     [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]
  })
 
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts))
  }, [contacts])
  const [filter, setFilter] = useState("");
  
  const filterContacts = contacts.filter(contact => contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
  
  const addContact = (newContact) => {
    setContacts((prevContacts)=> [...prevContacts, newContact])
  }

 const deleteContact = (id) => {
  setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== id));
};

  return (
  <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox value={filter} onChange={setFilter} />
      <ContactList  />
    </div>
  )
}

export default App