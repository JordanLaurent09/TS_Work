type Book = {
    title: string;
    author: string;
    yearPublished: number;
    available: boolean;
}

type Magazine = {
    title: string;
    issueNumber: number;
    month: string;
    available: boolean;
}

type Newspaper = {
    title: string;
    date: Date;
    editor: string;
    available: boolean;
}

type Paper = Book | Magazine | Newspaper;


function getProperty(obj: Paper, propertyName: keyof Paper) {
    if ('author' in obj) {
        
        console.log(obj[propertyName]);
    }
}

let potter: Book = {
    title: "Potter",
    author: "J.K. Rowling",
    yearPublished: 2007,
    available: true
}

getProperty(potter, 'title');




/* type ImmutableConfig = {
    readonly host: string;
    readonly port: number;
}

type MapNonImmutable<Type> = {
    -readonly [Property in keyof Type]: Type[Property]
} */


type Setters<Type> = {
    [Property in keyof Type as `set${Capitalize<string & Property>}`]: (value: Type[Property]) => void;
}