// import React from 'react'
// import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';

// function SearchContact({searchContact }) {
//   const filterID = nanoid();
//   return (
//     <div>
//       <label>Find contacts by name</label>
//         <input 
//         id={filterID}
//         type="text"
//         name='filter'
//         placeholder='Enter name'
//         onChange={e => searchContact(e.target.value)}
//         />
     
//     </div>
//   )
// }

// SearchContact.prototype = {
//     searchContact: PropTypes.func.isRequired,
//   };

// export default SearchContact;
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
