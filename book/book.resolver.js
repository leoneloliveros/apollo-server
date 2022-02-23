const { addBookHandler, getAllBooksHandler, getSingleBookHandler } = require('./book.controller')
const resolvers = {
  Query: {
    hello: () => 'Hello world',
    allBooks: getAllBooksHandler,
    book: getSingleBookHandler
  },
  Mutation: {
    addBook: addBookHandler
  }
}

module.exports = resolvers