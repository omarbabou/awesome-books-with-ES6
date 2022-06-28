const booksContent = document.querySelector('.displayBook');
const btn = document.getElementById('button');
const title = document.getElementById('title');
const author = document.getElementById('author');
// eslint-disable-next-line no-undef
const bookList = new Library();
const newBooks = bookList.bookArray;

function displayBook(book) {
  const newAddDiv = document.createElement('div');
  const booksContent = document.querySelector('.displayBook');
  newAddDiv.classList.add('bookItem');
  newAddDiv.id = book.id;
  newAddDiv.innerHTML = `<ul class="book-content">   
                                <li class = "title">${book.title}</li>
                                <li>${book.author}</li>
                            </ul>
                            <button id="remove">Remove</button>
    `;
  booksContent.appendChild(newAddDiv);
}

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