import React from 'react';
import PropTypes from 'prop-types';

import Business from './Business';

// eslint-disable-next-line no-unused-vars
const Businesses = ({ businesses, ...props }) => (
  <ul>
    {businesses.map((business, k) => (
      <Business business={business} format={'short'} key={k} />
    ))}
  </ul>
);

Businesses.propTypes = {
  businesses: PropTypes.arrayOf(Object),
};

export default Businesses;
