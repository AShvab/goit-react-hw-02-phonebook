import React from 'react';
import ContactListItem from 'components/ContactListItem/ContactListItem';
// import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

function ContactList({ contacts, removeContact }) {
    return (        
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
