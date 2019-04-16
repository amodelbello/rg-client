import React from 'react';
import Router from 'next/router';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import withData from '../lib/withData';

import { Layout } from '../components/layout';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  title = 'Login';

  login = async () => {
    const result = await this.props.loginMutation({
      variables: {
        email: '1testuser@lalala.com',
        password: 'password1',
      },
    });
    console.log('result', result);
    // Router.push('/');
  };

  render() {
    return (
      <Layout title={this.title}>
        <div className="hero">
          <h1 className="title">{this.title}</h1>
          <button className="btn btn-dark btn-lg" onClick={this.login}>
            Login
          </button>
        </div>

        <style jsx>{`
          .title {
            padding-top: 40px;
          }
        `}</style>
      </Layout>
    );
  }
}

Login.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  loginMutation: PropTypes.func,
};

const AUTH_MUTATION = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export default withData(
  graphql(AUTH_MUTATION, { name: 'loginMutation' })(Login)
);
