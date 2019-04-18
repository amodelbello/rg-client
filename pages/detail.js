import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import withData from '../lib/withData';
import AuthHelper from '../lib/authHelper';

import { Layout } from '../components/layout';
import Business from '../components/Business';

class Detail extends React.Component {
  static async getInitialProps({ res }) {
    const authHelper = new AuthHelper(res);
    authHelper.checkAuth();
  }

  render() {
    this.props.businessData.variables.id = this.props.router.query.id;
    const { business } = this.props.businessData;
    this.title = business ? `${business.name}` : '';

    console.log('render business', business);
    return (
      <Layout title={this.title}>
        <h1>{this.title || 'hello'}</h1>
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
  }
}

Detail.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  businessData: PropTypes.object,
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
  withData(graphql(BUSINESS_QUERY, { name: 'businessData' })(Detail))
);
