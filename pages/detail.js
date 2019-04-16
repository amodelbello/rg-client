import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import withData from '../lib/withData';

import { Layout } from '../components/layout';
import Business from '../components/Business';

const Detail = ({ router, businessQuery }) => {
  businessQuery.variables.id = router.query.id;
  const { business } = businessQuery;
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
  router: PropTypes.object,
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

export default withRouter(
  withData(graphql(BUSINESS_QUERY, { name: 'businessQuery' })(Detail))
);
