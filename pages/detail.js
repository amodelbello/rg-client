import React from 'react';
import Link from 'next/link';

import Layout from '../components/Layout';
import { string } from 'prop-types';

const Detail = ({ title = 'This is the detail' }) => (
  <Layout title={title}>
    <div>
      <h1>Detail!</h1>
      <Link href="/">Link</Link>
    </div>

    <style jsx>{`
      div {
        text-align: center;
      }
    `}</style>
  </Layout>
);

Detail.propTypes = {
  title: string,
  description: string,
};

export default Detail;
