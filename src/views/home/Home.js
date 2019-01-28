import React from 'react';
import { connect } from 'react-redux';

// Components
import Award from 'components/award/Award';
import awardList from 'sdk/awardList';

// Styles
import styled from '@emotion/styled';

const Main = styled.main`
  color: blue;
`;

const Home = () => (
  <Main>
    Home
    {
      awardList.map(award => (
        <Award key={ award.id } award={ award } />
      ))
    }
  </Main>
);

export default connect(state => state)(Home);
