// React
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';

// State
import * as selectors from 'state/persons/selectors';

// Components
import {
  Card,
  CardDescription,
  CardImage,
  CardTitle,
} from 'components/card';

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
            <CardDescription>
              <CardTitle title={ title } />
              {/* <p>{`in ${person.movie}`}</p> */}
            </CardDescription>
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
