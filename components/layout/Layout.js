import React from 'react';
import PropTypes from 'prop-types';
import NextHead from 'next/head';

import Header from './Header';
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../static/css/base.css';

const defaultDescription = '';

const Layout = ({ children, title = 'Best Chile', ...props }) => (
  <React.Fragment>
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{title || ''}</title>
      <meta
        name="description"
        content={props.description || defaultDescription}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
      <link rel="apple-touch-icon" href="/static/touch-icon.png" />
      <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
      <link rel="icon" href="/static/favicon.ico" />
    </NextHead>
    <Header />
    <div className="container">{children}</div>
    <div className="bg-light">
      <Footer />
    </div>
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.arrayOf(Object),
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Layout;
