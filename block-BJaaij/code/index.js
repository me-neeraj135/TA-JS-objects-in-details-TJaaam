// book
let books = data;

class Book {
  constructor(books) {
    this.title = books.title;
    this.category = books.category;
    this.isRead = books.isRead;
    this.finishedDate = books.finishedDate;
  }
  markBookAsRead() {
    this.isRead = !this.isRead;
    this.finishedDate = new Date();
  }
}

// book-list

class BookList extends Book {
  constructor(books, currentReadBookIndex) {
    super(books);
    this.arrOfBook = books;
    this.currentReadBookIndex = currentReadBookIndex;
  }
  add(book) {
    this.arrOfBook.push(book);
    return this.arrOfBook;
  }
  getCurrentBook() {
    return this.arrOfBook[this.currentReadBookIndex];
  }
  getNextBook() {
    this.currentReadBookIndex = this.currentReadBookIndex + 1;
    return this.arrOfBook[this.currentReadBookIndex];
  }
  getPrevBook() {
    this.currentReadBookIndex = this.currentReadBookIndex - 1;
    return this.currentReadBookIndex;
  }
  changeCurrentBook(index) {
    return (this.currentReadBookIndex = index);
  }
}

let copy = new Book(books);
