// task1.js
const Book = require("./Book");
const EBook = require("./EBook");

// Створюємо кілька екземплярів Book
const book1 = new Book("Пригоди Тома Сойєра", "Марк Твен", 1876);
const book2 = new Book("Гаррі Поттер", "Джоан Роулінг", 1997);

// Викликаємо printInfo для кожного
book1.printInfo();
book2.printInfo();

// Створюємо екземпляр EBook
const ebook1 = new EBook("Електронна книга", "Автор Електрон", 2020, "PDF");
ebook1.printInfo();

// Використовуємо геттери і сеттери
book1.title = "Новий заголовок";
ebook1.fileFormat = "EPUB";
console.log(book1.title); // Новий заголовок
console.log(ebook1.fileFormat); // EPUB

// Створюємо масив книг для статичного методу
const allBooks = [book1, book2, ebook1];
const oldest = Book.getOldestBook(allBooks);
console.log("Найдавніша книга:");
oldest.printInfo();

// Використовуємо статичний метод EBook для створення EBook з Book
const ebook2 = EBook.createFromBook(book2, "MOBI");
ebook2.printInfo();
