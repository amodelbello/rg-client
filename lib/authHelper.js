import Router from 'next/router';
import Cookies from 'universal-cookie';

class AutHelper {
  request = '';
  serverCookies = '';
  clientCookies = '';

  constructor(res = '') {
    this.res = res;
    const cookie = this.res ? res.req.headers.cookie : '';
    this.serverCookies = new Cookies(cookie);
    this.clientCookies = new Cookies();
  }

  checkAuth() {
    if (!this.getToken()) {
      this.redirectToLogin();
    }
  }

  redirectToLogin() {
    if (this.res) {
      this.res.writeHead(302, {
        Location: `//${this.res.req.headers.host}/login`,
      });
      this.res.end();
    } else {
      Router.push('/login');
    }
    return {};
  }

  setToken(token) {
    this.clientCookies.set('token', token, { path: '/' });
    this.serverCookies.set('token', token, { path: '/' });
  }

  removeToken() {
    // FIXME: This doesn't work on the client. Can't figure out why
    console.log('client?', process.browser);
    console.log('client cookie', this.clientCookies.get('token'));
    console.log('server cookie', this.serverCookies.get('token'));

    this.clientCookies.remove('token');
    this.serverCookies.remove('token');
  }

  getToken() {
    return this.clientCookies.get('token') || this.serverCookies.get('token');
  }

  hasToken() {
    const token = this.getToken();

    if (token) {
      return true;
    }

    return false;
  }

  getProfile() {
    return JSON.parse(this.getToken());
  }
}

export default AutHelper;
