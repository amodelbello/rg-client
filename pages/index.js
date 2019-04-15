import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import withData from '../lib/withData';

import { Layout } from '../components/layout';
import Businesses from '../components/Businesses';

const businesses = [{ name: 'hello', k: 0 }, { name: 'bababa', k: 1 }];

const id = 'xxx';

const Home = ({ title = 'Restaurants' }) => (
  <Layout title={title}>
    <div className="hero">
      <h1 className="title">{title}</h1>
      <p className="description">
        To get started, edit <code>pages/index.js</code> and save to reload.
        <Link as={`/detail/${id}`} href={`/detail?id=${id}`}>
          <a>Detail</a>
        </Link>
      </p>

      <Businesses businesses={businesses} />
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </Layout>
);

Home.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default withData(Home);
