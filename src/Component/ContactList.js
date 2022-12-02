import React from 'react';
import ContactCard from './ContactCard';
import {contactCardData} from './data/card-data';

const ContactList = () =>{
    
    const list = contactCardData.map(item => {
        return(
        <ContactCard 
        item={item}     
        />
          )
        })
    return(
            <div className="">
            {list}
            </div>
    )
}

export default ContactList;
