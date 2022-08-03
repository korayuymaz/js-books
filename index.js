let form = document.querySelector("form");
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");
let bookcase = document.querySelector("#bookcase");
let submitButton = document.querySelector("#submit")
let books = document.querySelector(".books")

let myLibrary = [];

function Book(id, title, author, pages, bookcase, read){
  this.id = id;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.bookcase = bookcase;
  this.read = read;
}

function clearValues(){
  title.value = ""
  author.value = ""
  pages.value = ""
  bookcase.value = ""
}

function updateHtml(library){
  if(library){
    books.innerHTML = ""
    console.log("Book inner html ", books)
    for(let bookNumber in myLibrary){
      let book = myLibrary[bookNumber]
      book.id = bookNumber
      var bookHtml = document.createElement("div")
      books.appendChild(bookHtml)
      bookHtml.classList.add("book")
      bookHtml.innerHTML = `<img src=${book.bookcase} alt="book-case"/>
      <div class="book-details">
        <div class="title">
          <div>Title</div>
          <div>${book.title}</div>
        </div>
        <div class="author">
          <div>Author</div>
          <div>${book.author}</div>
        </div>
        <div class="number-of-pages">
          <div>Number of Pages</div>
          <div>${book.pages}</div>
        </div>
        <div class="buttons">
          <button id="${book.id}" type="button" class="book-read" onclick="readBook(this.id)">Read</button>
          <button id="${book.id}-${book.title}}" type="button" class="book-delete" onclick="deleteBook(this.id)">Delete</button>
        </div>
      </div>
      `
    }
  }
}

function addBookToLibrary(){
  let newBook = new Book(null, title.value, author.value, pages.value, bookcase.value, true)
  clearValues()
  myLibrary.push(newBook)
  updateHtml(myLibrary)
}

function readBook(id){
  if(myLibrary[id]){
    let myButton = document.getElementById(id)
    if(myLibrary[id].read){
      myLibrary[id].read = false
      myButton.textContent = "Unread"
    } else{
      myLibrary[id].read = true
      myButton.textContent = "Read"
    }
  }
}

function deleteBook(id){
  let myButtonId = id.split("-")
  myButtonId = id[0]
  let myBookDiv = document.getElementById(myButtonId).parentElement.parentElement.parentElement
  books.removeChild(myBookDiv)
  myLibrary.splice(id,1)
}