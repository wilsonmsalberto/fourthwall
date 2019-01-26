import React from 'react';
import PropTypes from 'prop-types';

import NomineesList from 'components/nominees-list/NomineesList';

const Award = ({ award }) => (
  <section>
    <h2>{ award.title }</h2>
    <NomineesList list={ award.nominees } />
  </section>
);

Award.propTypes = {
  award: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Award;
