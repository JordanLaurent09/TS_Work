/* class Person {
    public name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this._age = age;
    }
    // Создаем аксессоры
    getAge(): number {
        return this._age;
    }

    setAge(newAge: number): void {
        this._age = newAge;
    }

    public greet(): void {
        console.log(`Привет, ${this.name}!`);
    }
}

let person: Person = new Person("Сергей", 32); */


/* class Person {
    protected id: number;
    constructor(id: number) {
        this.id = id;
    }
}

class Employee extends Person {
    constructor(id: number) {
        super(id);
    }

    public getId(): number {
        return this.id;
    }
} */

/* class Person {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    public get age(): number {
        // маппинг - это видоизменение исходных данных
        let newAge: number = this._age * 4;
        return newAge;
    }

    // У сеттера НЕТ! возвращаемого значения
    public set age(value: number) {
        this._age = value;
    } 
}

let user: Person = new Person("Сергей", 32);

console.log(user)

user.age = 20; */

import {Example} from './module';
import {Summator, Multiplier, Divider} from './math';
import * as Math from './math';

let number: number = 10;
let example: Example = new Example(number, 34);

let ex: Math.Summator = new Summator();

