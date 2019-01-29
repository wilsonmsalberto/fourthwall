// React
import PropTypes from 'prop-types';
import React from 'react';

// Redux
import { connect } from 'react-redux';

// State
import * as selectors from 'state/movies/selectors';

// Components
import {
  Card,
  CardDescription,
  CardImage,
  CardTitle,
} from 'components/card';

const Movie = ({ imageUrl, title }) => (
  <Card>
    <>
      <CardImage
        url={ imageUrl }
        alt={ title }
      />
      <CardDescription>
        <CardTitle title={ title } />
      </CardDescription>
    </>
  </Card>
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
