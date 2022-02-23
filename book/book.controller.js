const { addNewBook, getAllBooks, getSingleBook } = require('./book.service')

async function addBookHandler(parent, args, context) {
  // validamos con context
  const { title, author } = args.input;
  const book = await addNewBook({ title, author });
  return book;
}

async function getAllBooksHandler(parent, args, context) {
  const { currentUser } = context
  if (!currentUser) {
    throw new Error('user must logged in')
  }

  if ( currentUser.email !== 'loliveros@gmail.com') {
    throw new Error('El usuario no es Leonel')
  }

  //funcion

  const books = await getAllBooks();
  return books;
}

async function getSingleBookHandler(parent, args) {
  const { title } = args;
  const book = await getSingleBook(title);
  return book;
}

module.exports = {
  addBookHandler,
  getAllBooksHandler,
  getSingleBookHandler,
}