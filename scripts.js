let myBooks = [];

function Book(bookName, bookAuthor, bookPages, bookRead) {
  this.bookName = bookName;
  this.bookAuthor = bookAuthor;
  this.bookPages = bookPages;
  this.bookRead = bookRead;
}

const addBookFormToggle = document.querySelector(".add-book-form-toggle");
const addBookForm = document.querySelector(".add-book-form");
// addBookFormToggle.addEventListener("click", toggleForm);

function openForm() {
  // console.log("Open form");
  addBookForm.style.display = "flex";
  addBookFormToggle.style.display = "none";
}

function closeForm() {
  addBookForm.style.display = "none";
  addBookFormToggle.style.display = "block";
}

function addBook() {}
