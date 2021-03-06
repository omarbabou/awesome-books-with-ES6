const displayBook = (book) => {
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
};

export default displayBook;