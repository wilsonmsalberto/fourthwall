import React from 'react';
import Link from 'components/link/Link';

// Styles
import styled from '@emotion/styled';

const Nav = styled.nav`
  padding: 1rem;
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  flex: 0 0 auto;
  padding: 0 .5rem;

  &:first-of-type {
    padding-left: 0;
  }

  &:last-of-type {
    padding-right: 0;
  }
`;

export default () => (
  <Nav>
    <List>
      <ListItem>
        <Link
          href="/"
          linkText="Home"
        />
      </ListItem>
      <ListItem>
        <Link
          href="/about"
          linkText="About"
        />
      </ListItem>
    </List>
  </Nav>
);
