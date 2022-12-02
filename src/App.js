import React from 'react'
import Header from './Component/Header'
import AddContact from './Component/AddContact'
import ContactList from './Component/ContactList'
const App = () => {
  return (
    <div>
      <Header />
      <AddContact />
      <ContactList />
    </div>
  )
}

export default App