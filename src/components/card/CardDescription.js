// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styled from '@emotion/styled';

const Wrapper = styled.div`
  min-height: 3rem;
  padding: .5rem;
`;

const CardDescription = ({ children }) => (<Wrapper>{children}</Wrapper>);

CardDescription.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CardDescription;
