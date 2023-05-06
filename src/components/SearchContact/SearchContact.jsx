import React from 'react';
import PropTypes from 'prop-types';

function SearchContact({ searchContact }) {
  return (
    <div>
      <label htmlFor="filter">Find contacts by name:</label>
      <input
        type="text"
        id="filter"
        name="filter"
        onChange={searchContact}
      />
    </div>
  );
}

SearchContact.propTypes = {
  searchContact: PropTypes.func.isRequired,
};

export default SearchContact;
