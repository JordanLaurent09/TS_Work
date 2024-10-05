class Book {
    private _title: string;
    private _author: string;

    constructor(title: string, author: string) {
        this._title = title;
        this._author = author;
    }

    public get Title() {
        return this._title;
    }

    public get Author() {
        return this._author;
    }
}

class Library implements Iterable<Book> {
    private _books: Book[];


    constructor(...books: Book[]) {
        this._books = books;
    }

    public get Books() {
        return this._books;
    }

    // Реализация интерфейса Iterable

    [Symbol.iterator](): Iterator<Book> {
        let index = 0;
        const data = this._books;
        return {
            next(): IteratorResult<Book> {
                if (index < data.length) { 
                    return {value: data[index++], done: false}
                }
                else return { value: undefined, done: true}
            }
        }

    }
}

let library: Library = new Library(new Book("Из глубин памяти", "Филип К. Дик"), 
                                   new Book("Морок над Инсмутом", "Говард Лавкрафт"),
                                   new Book("Королевская битва", "Косюн Таками"),
                                   new Book("Прекрасная Маргарет", "Генри Р. Хаггард"));

for (let book of library) {
    console.log(`Название: ${book.Title}, Автор: ${book.Author}`);
}
