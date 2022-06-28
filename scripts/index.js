import Library from '../modules/library.js';
import displayBook from '../modules/displayBook.js';

const booksContent = document.querySelector('.displayBook');
const btn = document.getElementById('button');
const title = document.getElementById('title');
const author = document.getElementById('author');
const bookList = new Library();
const newBooks = bookList.bookArray;

newBooks.forEach((book) => {
  displayBook(book);
});

btn.addEventListener('click', (e) => {
  e.preventDefault();
  if (title.value !== '' || author.value !== '') {
    const id = Date.now();
    const book = {
      id,
      title: title.value,
      author: author.value,
    };
    title.value = '';
    author.value = '';
    bookList.addNewBook(book);
    displayBook(book);
  }
});

booksContent.addEventListener('click', (e) => {
  if (e.target.id === 'remove') {
    const element = e.target.parentNode;
    bookList.removeBook(element.id);
    element.remove();
  }
});