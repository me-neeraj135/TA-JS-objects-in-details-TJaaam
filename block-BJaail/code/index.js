function myFunction() {
  class BookList {
    constructor(root, list = []) {
      this.books = list;
      this.root = root;
    }
    add(title, author, isbn) {
      let book = new Book(title, author, isbn);

      this.books.push(book);
      this.createUI();
      return this.books.length;
    }
    handleDelete(id) {
      let index = this.books.findIndex(book => book.id === id);
      this.books.splice(index, 1);
      this.createUI();
    }
    createUI() {
      this.root.innerHTML = ``;
      this.books.forEach(book => {
        let ui = book.createUI();

        ui.querySelector(`span`).addEventListener(
          `click`,
          this.handleDelete.bind(this, book.id)
        );
        this.root.append(ui);
      });
    }
  }

  class Book {
    constructor(title, author, isbn) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.id = Date.now();
    }
    createUI() {
      let li = document.createElement(`li`);
      let p1 = document.createElement(`p`);
      p1.innerText = this.title;
      let p2 = document.createElement(`p`);
      p2.innerText = this.author;
      let p3 = document.createElement(`p`);
      p3.innerText = this.isbn;

      let span = document.createElement(`span`);
      span.innerText = `❌`;
      li.append(p1, p2, p3, span);
      return li;
    }
  }

  let first = new BookList(document.querySelector(`.books`));

  let titleInput = document.querySelector(`.title`);
  let authorInput = document.querySelector(`.author`);
  let isbnInput = document.querySelector(`.isbn`);

  let button = document.querySelector(`.button`);
  button.addEventListener(`click`, event => {
    if (Boolean(titleInput.value && authorInput.value && isbnInput.value)) {
      first.add(titleInput.value, authorInput.value, isbnInput.value);
    } else {
      alert(`Please  input details`);
    }

    titleInput.value = ``;
    authorInput.value = ``;
    isbnInput.value = ``;
  });
}

myFunction();
