let myBooks = [];

function Book(bookName, bookAuthor, bookPages, bookRead) {
  this.bookName = bookName;
  this.bookAuthor = bookAuthor;
  this.bookPages = bookPages;
  this.bookRead = bookRead;
}

function renderBooks(booksArray) {
  const bookLibrary = document.querySelector(".bookLibrary");
  while (bookLibrary.firstChild) {
    bookLibrary.removeChild(bookLibrary.firstChild);
  }

  booksArray.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");

    const bookTitle = document.createElement("h2");
    bookTitle.classList.add("bookName");
    bookTitle.innerHTML = book.bookName;

    const bookAuthor = document.createElement("p");
    bookAuthor.classList.add("bookAuthor");
    bookAuthor.innerText = book.bookAuthor;

    const pageCount = document.createElement("p");
    pageCount.classList.add("pageCount");
    pageCount.innerText = book.bookPages;

    const readButton = document.createElement("button");
    readButton.classList.add("bookReadToggle");
    if (book.bookRead) {
      readButton.classList.add("read");
      readButton.innerHTML = "Read";
    } else {
      readButton.classList.add("unread");
      readButton.innerHTML = "Unread";
    }

    const removeEntryButton = document.createElement("button");
    removeEntryButton.classList.add("removeButton");
    removeEntryButton.innerText = "Remove";

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(pageCount);
    bookCard.appendChild(readButton);
    bookCard.appendChild(removeEntryButton);
    bookLibrary.appendChild(bookCard);
  });
}

const addBookFormToggle = document.querySelector(".add-book-form-toggle");
const addBookForm = document.querySelector(".add-book-form");
const addBookFields = document.querySelectorAll(".addBookInput");

function openForm() {
  addBookForm.style.display = "flex";
  addBookFormToggle.style.display = "none";
}

function closeForm() {
  addBookForm.style.display = "none";
  addBookFormToggle.style.display = "block";
}

function clearForm() {
  addBookFields[0].value = "";
  addBookFields[1].value = "";
  addBookFields[2].value = "";
  addBookFields[3].children[0].checked = false;
}

function addBook(event) {
  event.preventDefault();
  const bookName = addBookFields[0].value;
  const autherName = addBookFields[1].value;
  const noPages = addBookFields[2].value;
  const bookRead = addBookFields[3].children[0].checked;

  const newBook = new Book(bookName, autherName, noPages, bookRead);
  myBooks.push(newBook);
  renderBooks(myBooks);
  closeForm();
  clearForm();
}
