// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styled from '@emotion/styled';

const H3 = styled.h3`
  font-size: .9rem;
  line-height: 1.4;
  font-weight: 400;
  letter-spacing: .1rem;
  text-transform: uppercase;
`;

const CardTitle = ({ title }) => (<H3>{ title }</H3>);

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CardTitle;
