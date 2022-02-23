// const bookResolver = require('./book/book.resolver')
// // const userResolver = require('./user/user.resolver')

// module.exports = [bookResolver]


const { addBookHandler, getAllBooksHandler, getSingleBookHandler } = require('./book/book.controller')
const {createAccountHandler, logInUserHandler} = require('./user/user.controller')
const resolvers = {
  Query: {
    hello: () => 'Hello world',
    allBooks: getAllBooksHandler,
    book: getSingleBookHandler
  },
  Mutation: {
    addBook: addBookHandler,
    createAccount: createAccountHandler,
    logInUser: logInUserHandler
  }
}

module.exports = resolvers