// React
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styled from '@emotion/styled';

const Card = ({ children, className }) => (<article className={ className }>{ children }</article>);

Card.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

Card.defaultProps = {
  className: '',
};

const StyledCard = styled(Card)`
  width: 10rem;
`;

export default StyledCard;
