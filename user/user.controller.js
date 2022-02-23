const { createAccount, logInUser } = require('./user.service');

function createAccountHandler(_, args) {
  return createAccount(args.input);
}

async function logInUserHandler(_, args) {
  const { email, password } = args.input;

  const user = await logInUser(email, password)
  // TODO: add token to context

  return user;
}

module.exports = {
  createAccountHandler,
  logInUserHandler,
}