// React
import React from 'react';
import PropTypes from 'prop-types';

const CardTitle = ({ title }) => (<h3>{ title }</h3>);

CardTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CardTitle;
