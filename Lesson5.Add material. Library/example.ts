class CPU {
    model: string;
    price: number;
    frequency: number;
    TDP: number;

    constructor(model: string, price: number, frequency: number, TDP: number) {
        this.model = model;
        this.price = price;
        this.frequency = frequency;
        this.TDP = TDP;
    }

    displaySelfInfo() {
        return `Информация о процессоре:
            \tМодель: ${this.model}
            \tЦена: ${this.price}
            \tЧастота: ${this.frequency}
            \tТепловыделение: ${this.TDP}
            `;
    }
}



class PC {
    model: string;
    price: number;
    CPU: CPU;

    constructor(model: string, price: number, CPU: CPU) {
        this.model = model;
        this.price = price;
        this.CPU = CPU;
    }

    displaySelfInfo() {
        console.log(
            `Информация о компьютере:
            Модель: ${this.model}
            ${this.CPU.displaySelfInfo()}
            Цена: ${this.price}
            `)
    }
}

const cpu: CPU = new CPU("Intel core i-5-12400K", 45000.00, 4200.00, 340)
const computer: PC = new PC("ASUS", 10000.00, cpu);

(computer.displaySelfInfo());


/* class Brain {

    weight: number;
    capacity: number;

    constructor(weight: number, capacity: number) {
        this.weight = weight;
        this.capacity = capacity;
    }
}

class Person {

    name: string;
    age: number;
    sex: string;
    brain: Brain;

    constructor(name: string, age: number, sex: string) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.brain = new Brain(2000, 3000);
    }

}

const man: Person = new Person("Tommy", 32, "male"); */



class CPPU {
    model: string;
    frequency: number;

    constructor(model: string, frequency: number) {
        this.model = model;
        this.frequency = frequency;
    }
}

class RAM {
    capacity: number;

    constructor(capacity: number) {
        this.capacity = capacity;
    }
}

class VideoCard {

    model: string;

    constructor(model: string) {
        this.model = model;
    }
}

class MotherBoard {
    cpu: CPPU;
    ram: RAM;
    videoCard: VideoCard;

    constructor(cpu: CPPU, ram: RAM, videoCard: VideoCard) {
        this.cpu = cpu;
        this.ram = ram;
        this.videoCard = videoCard;
    }
}

class PowerBlock {
    model: string;
    power: number;

    constructor(model: string, power: number) {
        this.model = model;
        this.power = power;
    }
}

class Corpus {
    model: string;
    size: number;
    color: string;

    constructor(model: string, size: number, color: string) {
        this.model = model;
        this.size = size;
        this.color = color;
    }

}

class Computer {
    block: PowerBlock;
    motherBoard: MotherBoard;
    corpus: Corpus;

    constructor(block: PowerBlock, motherBoard: MotherBoard) {
        this.block = block;
        this.motherBoard = motherBoard;
        this.corpus = new Corpus("MediumOne", 400, 'black');
    }
}


const mommy: MotherBoard = new MotherBoard(new CPPU("Intel", 4200), new RAM(20000), new VideoCard("Videocard"));
const powerBlock: PowerBlock = new PowerBlock("Compact", 5000);

const pc: Computer = new Computer(powerBlock, mommy);

// Library

class Page {
    textContent: string;

    constructor(textContent: string) {
        this.textContent = textContent;
    }
}

class Book {
    pages: Array<Page>;

    constructor(...pages: Array<Page>) {
        this.pages = pages;
    }
}


class Brain {

    weight: number;
    capacity: number;

    constructor(weight: number, capacity: number) {
        this.weight = weight;
        this.capacity = capacity;
    }
}

class Person {

    name: string;
    age: number;
    sex: string;
    brain: Brain;

    constructor(name: string, age: number, sex: string) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.brain = new Brain(2000, 3000);
    }
}

class Library {
    books: Array<Book>;
    people: Array<Person>;

    constructor(books: Array<Book>, people: Array<Person>) {
        this.books = books;
        this.people = people;
    }

    addBook(book: Book): void {
        if (!this.books.includes(book)) {
            this.books.push(book);
        }
        else {
            console.log("We already have that book, thank you very much");
        }
    }

    removeBook(book: Book): void {
        if (this.books.includes(book)) {
            this.books = this.books.filter(function(everyBook) {
                return everyBook != book;
            })
        }
        else {
            console.log("You can't remove book that absence is so evident, thank you, my friend. My only friend.")
        }
    }
}

const lordOfTheRingsPageOne: Page = new Page("Хоббиты живут себе и в ус не дуют, Бильбо Бэггинс мается дурью, а Фродо, его племянник, вдруг становится обладателем КОЛЬЦА ВСЕВЛАСТЬЯ");
const lordOfTheRingsPageTwo: Page = new Page("Фродо Бэггинс и его друзья отправляются в путь, Фродо едва не погибает, но счастливо добирается до Ривенделла, где его штопают добросердечные эльфы");
const lordOfTheRingsPageThree: Page = new Page("Девятеро Хранителей держат путь к Роковой Горе, Гэндальф погибает в Мории, Боромира валят орки, Фродо и Сэм сбегают, а их друзей похищают");
const lordOfTheRingsPageFour: Page = new Page("Рохан выживает, Саруман повержен, похищенные хоббиты спасены ДЕРЕВЬЯМИ, а Эовин ВЛЮБЛЯЕТСЯ в Арагорна, помолвленного с ЭЛЬФИЙСКОЙ ЦАРЕВНОЙ");
const lordOfTheRingsPageFive: Page = new Page("Фродо и Сэм преданы Горлумом, отбились от паучихи и СКИНУЛИ КОЛЬЦО В ВУЛКАН. занавес...");

const lordOfTheRingsBook: Book = new Book(lordOfTheRingsPageOne, lordOfTheRingsPageTwo, lordOfTheRingsPageThree, lordOfTheRingsPageFour, lordOfTheRingsPageFive);

const anabasisPageOne: Page = new Page("Ксенофонт с греческими наемниками прибывает к ПЕРСИДСКОМУ ЦАРЕВИЧУ, который хочет скинуть с трона СВОЕГО ПАПУ");
const anabasisPageTwo: Page = new Page("Персидский царевич РАЗДАВЛЕН своим папой... Ксенофонт и греческие наемники оказываются в районе Вавилона СОВЕРШЕННО ОДНИ в окружении ЗЛОБНЫХ ПЕРСОВ");
const anabasisPageThree: Page = new Page("...описывается долгая дорога Ксенофонта и греческих наемников домой в Элладу");

const anabasisBook: Book = new Book(anabasisPageOne, anabasisPageTwo, anabasisPageThree);

let books: Array<Book> = new Array<Book>;
books.push(lordOfTheRingsBook);


const me: Person = new Person("Shuraev", 32, "male");
let people: Array<Person> = new Array<Person>;
people.push(me);

const library: Library = new Library(books, people);

for (let i = 0; i < library.books.length; i++) {
    console.log(library.books[i].pages[0]);
}

library.addBook(anabasisBook);
library.addBook(anabasisBook);

for (let i = 0; i < library.books.length; i++) {
    console.log(library.books[i].pages[0]);
}

library.removeBook(lordOfTheRingsBook);
library.removeBook(lordOfTheRingsBook);

for (let i = 0; i < library.books.length; i++) {
    console.log(library.books[i].pages[0]);
}