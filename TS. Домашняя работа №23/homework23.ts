interface IBook {
    title: string;
    author: string;
    year: number;
    genre: string;
}


type ReadonlyBook = Readonly<IBook>;


let bookRecord: ReadonlyBook = {
    title: "69",
    author: "Ryu Murakami",
    year: 1987,
    genre: "School adventure"
}

// Переприсвоить значение не получается
bookRecord.author = '';