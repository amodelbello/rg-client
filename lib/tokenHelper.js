import Cookies from 'universal-cookie';
const cookies = new Cookies();

function getTokenFromCookie() {
  return cookies.get('token');
}

export default {
  storeToken: token => {
    // localStorage.setItem('token', token);
    console.log('storeToken');
    cookies.set('token', token, { path: '/' });
  },

  removeToken: () => {
    console.log('removeToken');
    // localStorage.removeItem('token');
    cookies.remove('token');
  },

  getToken: () => {
    console.log('getToken');
    // return getTokenFromLocalStorage();
    return getTokenFromCookie();
  },

  hasToken: () => {
    console.log('hasToken');
    // const token = getTokenFromLocalStorage();
    const token = getTokenFromCookie();
    if (token) {
      return true;
    }

    return false;

    // const expiresAt = JSON.parse(
    //   localStorage.getItem('scotch_auth_expires_at')
    // );
    // return new Date().getTime() < expiresAt;
  },

  getProfile: () => {
    // return JSON.parse(localStorage.getItem('token'));
    return JSON.parse(getTokenFromCookie());
  },
};
