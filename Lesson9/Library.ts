class Book {
    private _id: number;
    private _name: string;
    private _author: string;
    private _publishYear: number;

    constructor(id: number, name: string, author: string, publishYear: number) {
        this._id = id;
        this._name = name;
        this._author = author;
        this._publishYear = publishYear;
    }

    public getInfo(): void {
        console.log(`Информация о книге: ${this._name} ${this._author} ${this._publishYear}`);
    }
}

class Reader {
    private _id: number;
    private _name: string;
    private _books: Array<Book>;

    constructor(id: number, name: string) {
        this._id = id;
        this._name = name;
        this._books = new Array<Book>();
    }

    public addBook(book: Book): void {
        if (!this._books.includes(book)) {
            this._books.push(book);
        }
        else {
            console.log("У тебя уже есть эта книга, дружище!");
        }
    }

    public removeBook(book: Book): void {
        if (this._books.includes(book)) {
            this._books = this._books.filter(function(everyBook) {
                return everyBook != book;
            })
        }
    }

    
}

