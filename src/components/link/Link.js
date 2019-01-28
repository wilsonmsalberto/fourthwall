import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';

const Link = ({ linkText, href }) => (
  <NextLink href={ href }>
    <a href={ href }>
      { linkText || href }
    </a>
  </NextLink>
);

Link.propTypes = {
  linkText: PropTypes.string,
  href: PropTypes.string.isRequired,
};

Link.defaultProps = {
  linkText: '',
};

export default Link;
