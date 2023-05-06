import React from 'react';
import PropTypes from 'prop-types';

function ContactListItem({name, number, id, removeContact}) {
  return (
    <li>      
      <p>{name}: {number}</p>
      <button onClick={() => removeContact(id)} type="button">Delete</button>
    </li>
  )
}

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    removeContact: PropTypes.func.isRequired,
  };

export default ContactListItem;

