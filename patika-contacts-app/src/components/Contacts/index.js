  import { useState, useEffect } from 'react'
 import List from './List'
 import Form from './Form'
 import "./styles.css"
 function Contacts() {
    const [contacts, setContacts] =useState([
        {
            fullname:"Sergen Yalçın",
            phone_number : "05555423656"
        },{
            fullname:"Feyyaz Uçar",
            phone_number : "05422455354"
        },{
            fullname:"Mihail Tal",
            phone_number : "05858585858"
        }
    ])
    useEffect(()=>{
console.log(contacts)
    },[contacts])
   return (
     <div id="container">
        <h1>
            Contacts
        </h1>
        
        <List contacts = {contacts}/>
        <Form addContact = {setContacts} contacts={contacts}/>
     </div>
   )
 }
 
 export default Contacts