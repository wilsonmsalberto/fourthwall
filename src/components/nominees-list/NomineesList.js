import React from 'react';
import PropTypes from 'prop-types';

import Movie from './Movie';
import Person from './Person';

const NomineesList = ({ list }) => (
  <ul>
    {
      list.map((nominee) => {
        const { type, id } = nominee;
        return (
          <li key={ id }>
            {
              type === 'movie' && <Movie id={ id } />
            }
            {
              type === 'person' && <Person id={ id } />
            }
          </li>
        );
      })
    }
  </ul>
);

NomineesList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NomineesList;
