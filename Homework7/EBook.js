// EBook.js
const Book = require("./Book");

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this._fileFormat = fileFormat;
  }

  // Get
  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(newFormat) {
    if (typeof newFormat === "string" && newFormat.length > 0) {
      this._fileFormat = newFormat;
    } else {
      console.log("Невірний формат файлу");
    }
  }

  // Перевизначений метод printInfo
  printInfo() {
    console.log(
      `"${this._title}" автор: ${this._author}, рік видання: ${this._year}, формат файлу: ${this._fileFormat}`
    );
  }

  // Статичний метод для створення EBook з Book
  static createFromBook(bookInstance, format) {
    if (!(bookInstance instanceof Book)) {
      console.log("Потрібен Book");
      return null;
    }
    return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, format);
  }
}

module.exports = EBook;
