const Book = require('./book.model');

function addNewBook(book) {
  return Book.create(book);
}

function getAllBooks() {
  return Book.find();
}

function getSingleBook(title) {
  return Book.findOne({ title });
}

module.exports = {
  addNewBook,
  getAllBooks,
  getSingleBook,
}