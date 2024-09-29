"use strict";
class Color {
    constructor(color) {
        this._color = color;
    }
}
class DogClass {
    constructor(name, age, breed) {
        this._name = name;
        this._age = age;
        this._breed = breed;
    }
    makeSound() {
        console.log("Bark at the Moon");
    }
    fetch() {
        console.log("Sir, yes, sir!");
    }
    showInfo() {
        console.log(`${this._name} + ${this._age} + ${this._breed}`);
    }
}
class CatClass {
    constructor(name, age, color) {
        this._name = name;
        this._age = age;
        this._color = color;
    }
    makeSound() {
        console.log("Meow!");
    }
    climpTree() {
        console.log("You never get a heaven if you scared get high");
    }
    showInfo() {
        console.log(`${this._name} + ${this._age} + ${this._color._color}`);
    }
}
class BirdClass {
    constructor(name, age, canFly) {
        this._name = name;
        this._age = age;
        this._canFly = canFly;
    }
    makeSound() {
        console.log("Twirl!");
    }
    fly() {
        console.log("Мне сверху видно всё, ты так и знай!");
    }
    showInfo() {
        console.log(`${this._name} + ${this._age} + ${this._canFly}`);
    }
}
class AnimalFactory {
    static createAnimal(className, firstParam, secondParam, thirdParam) {
        if (className === DogClass) {
            return new DogClass(firstParam, secondParam, thirdParam);
        }
        else if (className === CatClass) {
            return new CatClass(firstParam, secondParam, thirdParam);
        }
        else if (className === BirdClass) {
            return new BirdClass(firstParam, secondParam, thirdParam);
        }
        throw new Error("Unknown type of an animal.");
    }
}
let dog = AnimalFactory.createAnimal(DogClass, 'Duke', 4, 'pudel');
let cat = AnimalFactory.createAnimal(CatClass, 'Lion', 6, new Color('orange'));
let bird = AnimalFactory.createAnimal(BirdClass, 'Stormherald', 23, true);
dog.fetch();
dog.makeSound();
console.log(`${dog._name} ${dog._age} ${dog._breed}`);
cat.climpTree();
cat.makeSound();
console.log(`${cat._name} ${cat._age} ${cat._color._color}`);
bird.fly();
bird.makeSound();
console.log(`${bird._name} ${bird._age} ${bird._canFly}`);
class AnimalShelter {
    constructor() {
        this._animals = new Array();
    }
    addAnimal(newAnimal) {
        if (!this._animals.includes(newAnimal)) {
            this._animals.push(newAnimal);
        }
        else {
            console.log("This animal in the list yet");
        }
    }
    removeAnimal(animal) {
        if (this._animals.includes(animal)) {
            this._animals = this._animals.filter(function (item) {
                return item != animal;
            });
        }
        else {
            console.log("Can't find animal, check your info");
        }
    }
    showAnimals() {
        for (let i = 0; i < this._animals.length; i++) {
            console.log(this._animals[i].showInfo());
        }
    }
}
let animalShelter = new AnimalShelter();
animalShelter.addAnimal(dog);
animalShelter.addAnimal(dog);
animalShelter.addAnimal(cat);
animalShelter.addAnimal(bird);
animalShelter.showAnimals();
