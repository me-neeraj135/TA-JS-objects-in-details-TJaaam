// book

class Book {
  constructor(title, author, category) {
    this.title = title;
    this.category = category;
    this.author = author;
    this.isRead = false;
    this.finishedDate = null;
  }
  markBookAsRead() {
    this.isRead = true;
    this.finishedDate = Date.now();
  }
}

// book-list

class BookList {
  constructor() {
    this.books = [];
    this.currentReadBookIndex = 0;
  }
  add(arr) {
    this.books = this.books.concat(arr);
    return this.books;
  }
  getCurrentBook() {
    return this.books[this.currentReadBookIndex];
  }
  getNextBook() {
    this.currentReadBookIndex = this.currentReadBookIndex + 1;
    return this.books[this.currentReadBookIndex];
  }
  getPrevBook() {
    this.currentReadBookIndex = this.currentReadBookIndex - 1;
    return this.books[this.currentReadBookIndex];
  }
  changeCurrentBook(index) {
    this.currentReadBookIndex = index;
    return this.books[this.currentReadBookIndex];
  }
}

let book1 = new Book(
  `The Story Of My Experiments With The Truth`,
  `Mahatma Gandhi`,
  `Bio`
);
let book2 = new Book(`The Guide`, ` R.K. Narayan`, `Fictional`);
let book3 = new Book(`A Fine Balance`, `Rohinton Mistry`, `Novel`);
let book4 = new Book(`The Interpreter Of Maladies`, `Jhumpa Lahiri`, `Story`);
let book5 = new Book(`A Suitable Boy`, `Vikram Seth`, `Novel`);

let library = new BookList();
library.add([book1, book2, book3, book4, book5]);
