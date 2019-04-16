import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import withData from '../lib/withData';

import { Layout } from '../components/layout';
import Business from '../components/Business';

const Detail = props => {
  const title = 'bababa';
  props.businessQuery.variables.id = '5b14b27d3450501de43d2f98';
  const { business } = props.businessQuery;

  return (
    <Layout title={title}>
      <h1>{title || 'hello'}</h1>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Business business={business} />
      </div>

      <style jsx>{`
        div {
          text-align: center;
        }
      `}</style>
    </Layout>
  );
};

Detail.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  businessQuery: PropTypes.object,
};

const BUSINESS_QUERY = gql`
  query BusinessQuery($id: ID!) {
    business(id: $id) {
      id
      name
      averageRatings {
        category
        rating
      }
    }
  }
`;

export default withData(
  graphql(BUSINESS_QUERY, { name: 'businessQuery' })(Detail)
);
