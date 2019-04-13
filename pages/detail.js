import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import Layout from '../components/layout/Layout';
import Business from '../components/Business';

const business = {
  name: 'this name',
  address: 'this address',
};

const Detail = ({ title = 'This is the detail' }) => (
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

Detail.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Detail;
