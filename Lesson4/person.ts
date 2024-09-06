class Person {
    name: string;
    age!: number;

    constructor(name: string, age: number);
    constructor(name: string);


    constructor(name: string, age?: number){
        if (age === undefined) {
        this.name = name;
        return;
        }

        this.name = name;
        this.age = age;
    }

    greet(): string {
        return `Привет, меня зовут ${this.name}, мне ${this.age} лет!`;
    }

    celebrateBirthday(): void {
        this.age +=1;
        console.log(`С днем рождения, ${this.name}! Теперь тебе ${this.age} лет!`);
    }

    throwAnError(): never {
        throw new Error();
    }
}

const person: Person = new Person("Valeryy", 34);
console.log(person.greet());
person.celebrateBirthday();