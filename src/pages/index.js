// React
import React, { Component } from 'react';

// Redux
import { connect } from 'react-redux';

// SDK
import awardList from 'sdk/awardList';

// State
import { getConfig } from 'state/config/actions';
import { getMovie } from 'state/movies/actions';
import { getPerson } from 'state/persons/actions';

// Components
import Home from 'views/home/Home';

class HomePage extends Component {
  static async getInitialProps({ store }) {
    await this.getNominees(store);

    return {};
  }

  static getNominees = async (store) => {
    const promises = [];

    await store.dispatch(getConfig());

    awardList.forEach((award) => {
      award.nominees.forEach((nominee) => {
        // let count = 0;

        // if (promises[count].length === 30) {
        //   count += 1;
        //   promises[count] = [];
        // }

        const { type, id } = nominee;

        if (type === 'movie') {
          promises.push(store.dispatch(getMovie(id)));
        }

        if (type === 'person') {
          promises.push(store.dispatch(getPerson(id)));
        }
      });
    });

    await Promise.all(promises);
  }

  render() {
    return (<Home />);
  }
}

export default connect(state => state)(HomePage);
