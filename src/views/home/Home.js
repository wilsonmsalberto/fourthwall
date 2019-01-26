import React from 'react';
import { connect } from 'react-redux';

// Components
import Award from 'components/award/Award';
import awardList from 'sdk/awardList';

// Styles
import styles from './Home.css';

const Home = () => (
  <main className={ styles.title }>
    {
      awardList.map(award => (
        <Award key={ award.id } award={ award } />
      ))
    }
  </main>
);

export default connect(state => state)(Home);
