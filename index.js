let form = document.querySelector("form");
let title = document.querySelector("#title");
let author = document.querySelector("#author");
let pages = document.querySelector("#pages");
let bookcase = document.querySelector("#bookcase");
let submitButton = document.querySelector("#submit")


let myLibrary = [];

function Book(title, author, pages, bookcase, read){
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

function addBookToLibrary(){
  console.log(title.value, author.value, pages.value, bookcase.value)
  let newBook = new Book(title.value, author.value, pages.value, bookcase.value, true)
  clearValues()
  myLibrary.push(newBook)
}

