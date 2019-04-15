import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import Business from './Business';

// eslint-disable-next-line no-unused-vars
const Businesses = props => {
  const { businesses } = props.allBusinessesQuery;

  return (
    <React.Fragment>
      {businesses && businesses.length ? (
        <ul>
          {businesses.map((business, k) => (
            <Business business={business} format={'short'} key={k} />
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </React.Fragment>
  );
};

const ALL_BUSINESSES_QUERY = gql`
  {
    businesses {
      id
      name
      averageRatings {
        category
        rating
      }
    }
  }
`;
Businesses.propTypes = {
  allBusinessesQuery: PropTypes.object,
};

export default graphql(ALL_BUSINESSES_QUERY, { name: 'allBusinessesQuery' })(
  Businesses
);
