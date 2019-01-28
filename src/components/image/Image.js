import urlJoin from 'url-join';

// React
import PropTypes from 'prop-types';
import React from 'react';

// Redux
import { connect } from 'react-redux';

// State
import * as selectors from 'state/config/selectors';

const Image = ({
  alt,
  baseUrl,
  className,
  size,
  url,
}) => (
  <img
    alt={ alt }
    className={ className }
    src={ urlJoin(baseUrl, size, url) }
  />
);

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  baseUrl: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  url: PropTypes.string.isRequired,
};

Image.defaultProps = {
  baseUrl: 'https://image.tmdb.org/t/p/',
  className: '',
  size: 'original',
};

const mapStateToProps = state => ({
  baseUrl: selectors.getImageBaseUrl(state),
});

export default connect(mapStateToProps)(Image);
