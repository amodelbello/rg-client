function getTokenFromLocalStorage() {
  return localStorage.getItem('token');
}

export default {
  storeToken: token => {
    localStorage.setItem('token', token);
    // local storage...
  },

  removeToken: () => {
    localStorage.removeItem('token');
  },

  getToken: () => {
    // return 'hello';
    return getTokenFromLocalStorage();
  },

  hasToken: () => {
    const token = getTokenFromLocalStorage();
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
    return JSON.parse(localStorage.getItem('token'));
  },
};
