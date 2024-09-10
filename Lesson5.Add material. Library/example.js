"use strict";
class CPU {
    constructor(model, price, frequency, TDP) {
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
    constructor(model, price, CPU) {
        this.model = model;
        this.price = price;
        this.CPU = CPU;
    }
    displaySelfInfo() {
        console.log(`Информация о компьютере:
            Модель: ${this.model}
            ${this.CPU.displaySelfInfo()}
            Цена: ${this.price}
            `);
    }
}
const cpu = new CPU("Intel core i-5-12400K", 45000.00, 4200.00, 340);
const computer = new PC("ASUS", 10000.00, cpu);
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
    constructor(model, frequency) {
        this.model = model;
        this.frequency = frequency;
    }
}
class RAM {
    constructor(capacity) {
        this.capacity = capacity;
    }
}
class VideoCard {
    constructor(model) {
        this.model = model;
    }
}
class MotherBoard {
    constructor(cpu, ram, videoCard) {
        this.cpu = cpu;
        this.ram = ram;
        this.videoCard = videoCard;
    }
}
class PowerBlock {
    constructor(model, power) {
        this.model = model;
        this.power = power;
    }
}
class Corpus {
    constructor(model, size, color) {
        this.model = model;
        this.size = size;
        this.color = color;
    }
}
class Computer {
    constructor(block, motherBoard) {
        this.block = block;
        this.motherBoard = motherBoard;
        this.corpus = new Corpus("MediumOne", 400, 'black');
    }
}
const mommy = new MotherBoard(new CPPU("Intel", 4200), new RAM(20000), new VideoCard("Videocard"));
const powerBlock = new PowerBlock("Compact", 5000);
const pc = new Computer(powerBlock, mommy);
// Library
class Page {
    constructor(textContent) {
        this.textContent = textContent;
    }
}
class Book {
    constructor(...pages) {
        this.pages = pages;
    }
}
class Brain {
    constructor(weight, capacity) {
        this.weight = weight;
        this.capacity = capacity;
    }
}
class Person {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.brain = new Brain(2000, 3000);
    }
}
class Library {
    constructor(books, people) {
        this.books = books;
        this.people = people;
    }
    addBook(book) {
        if (!this.books.includes(book)) {
            this.books.push(book);
        }
        else {
            console.log("We already have that book, thank you very much");
        }
    }
    removeBook(book) {
        if (this.books.includes(book)) {
            this.books = this.books.filter(function (everyBook) {
                return everyBook != book;
            });
        }
        else {
            console.log("You can't remove book that absence is so evident, thank you, my friend. My only friend.");
        }
    }
}
const lordOfTheRingsPageOne = new Page("Хоббиты живут себе и в ус не дуют, Бильбо Бэггинс мается дурью, а Фродо, его племянник, вдруг становится обладателем КОЛЬЦА ВСЕВЛАСТЬЯ");
const lordOfTheRingsPageTwo = new Page("Фродо Бэггинс и его друзья отправляются в путь, Фродо едва не погибает, но счастливо добирается до Ривенделла, где его штопают добросердечные эльфы");
const lordOfTheRingsPageThree = new Page("Девятеро Хранителей держат путь к Роковой Горе, Гэндальф погибает в Мории, Боромира валят орки, Фродо и Сэм сбегают, а их друзей похищают");
const lordOfTheRingsPageFour = new Page("Рохан выживает, Саруман повержен, похищенные хоббиты спасены ДЕРЕВЬЯМИ, а Эовин ВЛЮБЛЯЕТСЯ в Арагорна, помолвленного с ЭЛЬФИЙСКОЙ ЦАРЕВНОЙ");
const lordOfTheRingsPageFive = new Page("Фродо и Сэм преданы Горлумом, отбились от паучихи и СКИНУЛИ КОЛЬЦО В ВУЛКАН. занавес...");
const lordOfTheRingsBook = new Book(lordOfTheRingsPageOne, lordOfTheRingsPageTwo, lordOfTheRingsPageThree, lordOfTheRingsPageFour, lordOfTheRingsPageFive);
const anabasisPageOne = new Page("Ксенофонт с греческими наемниками прибывает к ПЕРСИДСКОМУ ЦАРЕВИЧУ, который хочет скинуть с трона СВОЕГО ПАПУ");
const anabasisPageTwo = new Page("Персидский царевич РАЗДАВЛЕН своим папой... Ксенофонт и греческие наемники оказываются в районе Вавилона СОВЕРШЕННО ОДНИ в окружении ЗЛОБНЫХ ПЕРСОВ");
const anabasisPageThree = new Page("...описывается долгая дорога Ксенофонта и греческих наемников домой в Элладу");
const anabasisBook = new Book(anabasisPageOne, anabasisPageTwo, anabasisPageThree);
let books = new Array;
books.push(lordOfTheRingsBook);
const me = new Person("Shuraev", 32, "male");
let people = new Array;
people.push(me);
const library = new Library(books, people);
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
