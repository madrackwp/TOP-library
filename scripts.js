let myBooks = [];

function Book() {}

const addBookBtn = document.querySelector(".header button");

addBookBtn.addEventListener("click", addBook);

function addBook() {
  console.log("Adding book");
}
