// Book.js

class Book {
  constructor(title, author, year) {
    this._title = title;
    this._author = author;
    this._year = year;
  }

  // Get
  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  get year() {
    return this._year;
  }

  // Set
  set title(newTitle) {
    if (typeof newTitle === "string" && newTitle.length > 0) {
      this._title = newTitle;
    } else {
      console.log("Невірний заголовок книги");
    }
  }

  set author(newAuthor) {
    if (typeof newAuthor === "string" && newAuthor.length > 0) {
      this._author = newAuthor;
    } else {
      console.log("Невірне ім'я автора");
    }
  }

  set year(newYear) {
    if (typeof newYear === "number" && newYear > 0) {
      this._year = newYear;
    } else {
      console.log("Невірний рік видання");
    }
  }

  // Метод для виведення інфо
  printInfo() {
    console.log(`"${this._title}" автор: ${this._author}, рік видання: ${this._year}`);
  }

  // Статичний метод для знаходження найдавнішої книги
  static getOldestBook(booksArray) {
    if (!Array.isArray(booksArray) || booksArray.length === 0) return null;

    let oldest = booksArray[0];
    for (let book of booksArray) {
      if (book.year < oldest.year) {
        oldest = book;
      }
    }
    return oldest;
  }
}

module.exports = Book;
