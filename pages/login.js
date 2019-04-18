import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import withData from '../lib/withData';
import AuthHelper from '../lib/authHelper';
import { Layout } from '../components/layout';

class Login extends React.Component {
  state = {
    token: '',
  };

  constructor(props) {
    super(props);
    this.authHelper = new AuthHelper();
  }

  static async getInitialProps({ res }) {
    this.authHelper = new AuthHelper(res);
  }

  title = 'Login';

  componentDidMount() {
    const token = this.authHelper.getToken();
    this.setState({
      token,
    });
  }

  login = async () => {
    const result = await this.props.loginMutation({
      variables: {
        email: 'testuser@lalala.com',
        password: 'password1',
      },
    });
    const token = result.data.login;
    this.authHelper.setToken(token);
    this.setState({
      token,
    });
  };

  logout = async () => {
    this.authHelper.removeToken();
    this.setState({
      token: 'Logged Out',
    });
    this.authHelper.redirectToLogin();
  };

  render() {
    return (
      <Layout title={this.title}>
        <div className="hero">
          <h1 className="title">{this.title}</h1>
          <button className="btn btn-dark btn-lg" onClick={this.login}>
            Login
          </button>
          <button className="btn btn-dark btn-lg" onClick={this.logout}>
            Logout
          </button>
        </div>

        <h1>Token: {this.state.token}</h1>
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
