// React
import PropTypes from 'prop-types';
import React from 'react';

// Redux
import { connect } from 'react-redux';

// State
import * as selectors from 'state/movies/selectors';

// Components
import Image from 'components/image/Image';

const Movie = ({ imageUrl, title }) => (
  <article>
    <Image
      url={ imageUrl }
      alt={ title }
      size="w500"
    />
    <h3>{title}</h3>
  </article>
);

Movie.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
};

Movie.defaultProps = {
  imageUrl: '',
  title: '',
};

const mapStateToProps = (state, ownProps) => ({
  imageUrl: selectors.getMovieImageUrl(state, ownProps.id),
  title: selectors.getMovieTitle(state, ownProps.id),
});

export default connect(mapStateToProps)(Movie);
