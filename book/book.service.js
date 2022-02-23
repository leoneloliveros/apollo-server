const { Book } = require('../models');

function addNewBook(book) {
  console.log('create book')
  return Book.create(book);
}

function getAllBooks() {
  return Book.findAll();
}

function getSingleBook(title) {
  return Book.findOne({ title });
}

module.exports = {
  addNewBook,
  getAllBooks,
  getSingleBook,
}