import React from 'react';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import { Total } from './ContactList.styled';


function ContactList({ contacts, removeContact }) {
    return ( 
      <div>
        <Total>PhoneBook contains: {contacts.length} contacts</Total>
        <ul>        
        {Array.isArray(contacts) &&
          contacts.length &&
          contacts.map(contact => {
            return (
                <ContactListItem
                  key={contact.id}
                  name={contact.name}
                  number={contact.number}
                  id={contact.id}
                  removeContact={removeContact}
                />
              );
            })}
      </ul>
      </div>    

    );
  }
  

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    removeContact: PropTypes.func.isRequired,
  };

  export default ContactList;

