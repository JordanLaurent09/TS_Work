"use strict";
class Book {
    constructor(title, author) {
        this._title = title;
        this._author = author;
    }
    get Title() {
        return this._title;
    }
    get Author() {
        return this._author;
    }
}
class Library {
    constructor(...books) {
        this._books = books;
    }
    get Books() {
        return this._books;
    }
    // Реализация интерфейса Iterable
    [Symbol.iterator]() {
        let index = 0;
        const data = this._books;
        return {
            next() {
                if (index < data.length) {
                    return { value: data[index++], done: false };
                }
                else
                    return { value: undefined, done: true };
            }
        };
    }
}
let library = new Library(new Book("Из глубин памяти", "Филип К. Дик"), new Book("Морок над Инсмутом", "Говард Лавкрафт"), new Book("Королевская битва", "Косюн Таками"), new Book("Прекрасная Маргарет", "Генри Р. Хаггард"));
for (let book of library) {
    console.log(`Название: ${book.Title}, Автор: ${book.Author}`);
}
