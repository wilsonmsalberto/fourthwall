// React
import React from 'react';
import PropTypes from 'prop-types';

// Components
import styled from '@emotion/styled';
import Movie from './Movie';
import Person from './Person';

// Styles

const List = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
`;

const ListItem = styled.li`
  margin: 0 1rem;
  flex: 0 0 auto;

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const NomineesList = ({ list }) => (
  <List>
    {
      list.map((nominee) => {
        const { type, id } = nominee;
        return (
          <ListItem key={ id }>
            {
              type === 'movie' && <Movie id={ id } />
            }
            {
              type === 'person' && <Person id={ id } />
            }
          </ListItem>
        );
      })
    }
  </List>
);

NomineesList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NomineesList;
