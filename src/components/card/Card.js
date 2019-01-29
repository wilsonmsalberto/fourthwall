// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styled from '@emotion/styled';

const Article = styled.article`
  height: 100%;
  width: 11rem;
  overflow: hidden;
  border-radius: .2rem;
  box-shadow: 0 .2rem .7rem 0 rgba(0,0,0,0.35);
  background-color: #fff;
`;

const Card = ({ children }) => (<Article>{ children }</Article>);

Card.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Card;
