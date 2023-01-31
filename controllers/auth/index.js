const register = require('./register');
const login = require('./login');
const logout = require('./logout');
const getUserInfo = require('./getUserInfo');
const updateUserInfo = require('./updateUserInfo');
const updateUserAvatar = require('./updateUserAvatar');
const google = require('./google');
const restorePass = require('./restorePass');

module.exports = {
  register,
  login,
  logout,
  getUserInfo,
  updateUserInfo,
  updateUserAvatar,
  google,
  restorePass,
};
