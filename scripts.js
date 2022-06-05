let myBooks = [];

function Book(bookName, bookAuthor, bookPages, bookRead) {
  this.bookName = bookName;
  this.bookAuthor = bookAuthor;
  this.bookPages = bookPages;
  this.bookRead = bookRead;
}

const book1 = new Book("Harry Potter", "JK Rowling", "400", true);
const book2 = new Book("Lord of the Ring", "Tolkien", "400", true);

myBooks.push(book1);
myBooks.push(book2);

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

  updateButtons();
}

const addBookFormToggle = document.querySelector(".add-book-form-toggle");
const addBookForm = document.querySelector(".add-book-form");
const addBookFields = document.querySelectorAll(".addBookInput");
let removeButtons = document.querySelectorAll(".removeButton");
let toggleReadButtons = document.querySelectorAll(".bookReadToggle");

function updateButtons() {
  removeButtons = document.querySelectorAll(".removeButton");
  toggleReadButtons = document.querySelectorAll(".bookReadToggle");
  removeButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      //We look for the book inside the array and remove it then call render()
      let bookKey = event.target.parentNode.children[0].innerHTML;
      for (var i = 0; i < myBooks.length; i++) {
        if (myBooks[i].bookName == bookKey) {
          myBooks.splice(i, 1);
          break;
        }
      }
      renderBooks(myBooks);
    });
  });

  //This will make sure that we add the class to the button to change color, also we update the myBooks array to make sure value there is updated
  toggleReadButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      //We update myBooks
      //We get the key from the card (for now we let it be the book title), and then we search the book array then we toggle the boolean
      let bookKey = event.target.parentNode.children[0].innerText;
      console.log(bookKey);
      myBooks.forEach((book) => {
        if (book.bookName == bookKey) {
          book.bookRead = !book.bookRead;
        }
      });
      //We then render all the books agains with renderBooks()
      renderBooks(myBooks);
    });
  });
}

function removeEvent(event) {
  console.log(event);
}

function toggleRead(event) {
  console.log(event);
}

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

renderBooks(myBooks);

const array = [1, 2, 3, 4, 5];
const newArray = array.forEach((i) => {
  let toReturn = [];
  if (i == 3) {
    return toReturn;
  } else {
    toReturn.push(i);
  }
});
