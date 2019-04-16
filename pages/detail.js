import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import withData from '../lib/withData';

import { Layout } from '../components/layout';
import Business from '../components/Business';

const Detail = props => {
  props.businessQuery.variables.id = props.url.query.id;
  const { business } = props.businessQuery;
  const title = business ? `${business.name}` : '';

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
  url: PropTypes.object,
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
      address {
        street
        street2
        city
        state
        zip
      }
      phone
    }
  }
`;

export default withData(
  graphql(BUSINESS_QUERY, { name: 'businessQuery' })(Detail)
);
