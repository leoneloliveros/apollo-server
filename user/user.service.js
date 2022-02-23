const { User } = require('../models')
const { signToken, comparePassword } = require('../auth/auth.service');

function createAccount(user) {
  return User.create(user);
}

async function logInUser(email, password) {
  const user = await User.find({ email });
  if (!user) {
    throw new Error('User or password incorrect');
  }
  const isPasswordValid = await comparePassword(password, user.password);
  if (!isPasswordValid) {
    throw new Error('User or password incorrect');
  } else {
    const token = signToken(user._id);
    return {
      user,
      token,
    };
  }
}

function getUserById(id) {
  return User.findByPK(id);
}

module.exports = {
  createAccount,
  logInUser,
  getUserById
};