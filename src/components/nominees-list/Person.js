// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// State
import * as selectors from 'state/persons/selectors';

// Components
import { Card, CardImage, CardTitle } from 'components/card';

class Person extends Component {
    static propTypes = {
      imageUrl: PropTypes.string,
      title: PropTypes.string,
    }

    static defaultProps = {
      imageUrl: '',
      title: '',
    }

    componentDidMount() {
      console.log('will get extra info');
    }

    render() {
      const { imageUrl, title } = this.props;
      return (
        <Card>
          <>
            <CardImage
              url={ imageUrl }
              alt={ title }
            />
            <CardTitle title={ title } />
            {/* <p>{`in ${person.movie}`}</p> */}
          </>
        </Card>
      );
    }
}

const mapStateToProps = (state, ownProps) => ({
  imageUrl: selectors.getPersonImageUrl(state, ownProps.id),
  title: selectors.getPersonName(state, ownProps.id),
});

export default connect(mapStateToProps)(Person);
