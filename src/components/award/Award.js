// React
import React from 'react';
import PropTypes from 'prop-types';

// Components
import NomineesList from 'components/nominees-list/NomineesList';

// Styles
import styled from '@emotion/styled';

const AwardTitle = styled.h2`
  padding-left: 1rem;
`;

const Section = styled.section`
  padding: 1rem 0;

  &:first-of-type {
    padding-top: 0;
  }

  &:last-of-type {
    padding-bottom: 0;
  }
`;

const Award = ({ award }) => (
  <Section>
    <AwardTitle>{ award.title }</AwardTitle>
    <NomineesList list={ award.nominees } />
  </Section>
);

Award.propTypes = {
  award: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Award;
