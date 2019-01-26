import urlJoin from 'url-join';

// React
import PropTypes from 'prop-types';
import React from 'react';

// Redux
import { connect } from 'react-redux';

// State
import * as selectors from 'state/config/selectors';

const Image = ({
  baseUrl,
  size,
  alt,
  url,
}) => (
  <img
    src={ urlJoin(baseUrl, size, url) }
    alt={ alt }
  />
);

Image.propTypes = {
  baseUrl: PropTypes.string,
  size: PropTypes.string,
  alt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

Image.defaultProps = {
  baseUrl: 'https://image.tmdb.org/t/p/',
  size: 'original',
};

const mapStateToProps = state => ({
  baseUrl: selectors.getImageBaseUrl(state),
});

export default connect(mapStateToProps)(Image);
