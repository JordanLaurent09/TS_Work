// код может быть переиспользован для разных целей - общий смысл полиморфизма. гибкость и изменчивость кода хороша в полиморфизме
class Printer {  // ad-hoc полиморфизм
    print(value: string): void;
    print(value: number): void;
    print(value: any): void {
        if(typeof(value) == "string") {

        }
        console.log(value);
    }
}

class Box<T> { // параметрический полиморфизм
    private _context: T;

    constructor(context: T) {
        this._context = context;
    }

    public getContext(): T {
        return this._context;
    }
}

let stringBox: Box<string> = new Box<string>('32');
let numberBox: Box<number> = new Box<number>(32);

console.log(stringBox.getContext());
console.log(numberBox.getContext());

class Animal {
    makeSound(): void {
    };
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Wuff");
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Meoww");
    }
}

class Dragon {
    makeSound() : void {
        console.log("YOU WILL BURN");
    }
}

function makeAnimalMakeSound(animal: Animal): void {
    animal.makeSound();
}

// Можно делать даже так, определяя переменные
let some: {field: number, makeSound: () => void} = {
    field: 34,
    makeSound(): void {
        console.log("lol");
    }
}

let dog: Dog = new Dog();
let cat: Cat= new Cat();
makeAnimalMakeSound(dog);
makeAnimalMakeSound(cat);

makeAnimalMakeSound(new Dragon());

let anim: Animal = new Animal();
let pyosik: Dog = anim as Dog;

let animals: Array<Animal> = [
    dog,
    cat,
    some,
    anim, 
    pyosik
]

function foo(animals: Animal[]): void {
    animals.forEach(animal => {
        if (animal instanceof Dog) {
            console.log("THIS IS MY DOG, MY DOG IS AMAZING");
        }
    })
}

// опираемся на абстракцию, а не на реализацию - пятый принцип солид