import { useEffect } from 'react'
import './App.css'
import Contact from './components/Contact/Contact'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from './redux/contactsOps';
import { selectError, selectLoading } from './redux/contactsSlice'


function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading); 
  const error = useSelector(selectError); 

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ContactList />
    </div>
  );
}

export default App