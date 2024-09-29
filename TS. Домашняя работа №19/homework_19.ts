class Color {
    _color: string;

    constructor(color: string) {
        this._color = color;
    }
}

interface IAnimal {
    _name: string;
    _age: number;

    makeSound(): void;

    showInfo(): void;
}

interface IDog extends IAnimal {
    _breed: string;

    fetch(): void;
}

interface ICat extends IAnimal {
    _color: Color;

    climpTree(): void;
}

interface IBird extends IAnimal {
    _canFly: boolean;

    fly(): void;
}

class DogClass implements IDog {
    _name: string;
    _age: number;
    _breed: string;
    
    constructor(name: string, age: number, breed: string) {
        this._name = name;
        this._age = age;
        this._breed = breed;
    }

    public makeSound(): void {
        console.log("Bark at the Moon");
    }

    public fetch(): void {
        console.log("Sir, yes, sir!");
    }

    public showInfo(): void {
        console.log(`${this._name} + ${this._age} + ${this._breed}`);
    }
}

class CatClass implements ICat {
    _name: string;
    _age: number;
    _color: Color;

    constructor(name: string, age: number, color: Color) {
        this._name = name;
        this._age = age;
        this._color = color;
    }

    public makeSound(): void {
        console.log("Meow!");
    }

    public climpTree(): void {
        console.log("You never get a heaven if you scared get high");
    }

    public showInfo(): void {
        console.log(`${this._name} + ${this._age} + ${this._color._color}`);
    }
}

class BirdClass implements IBird {
    _name: string;
    _age: number;
    _canFly: boolean;

    constructor(name: string, age: number, canFly: boolean) {
        this._name = name;
        this._age = age;
        this._canFly = canFly;
    }

    public makeSound(): void {
        console.log("Twirl!");
    }

    public fly(): void {
        console.log("Мне сверху видно всё, ты так и знай!");
    }

    public showInfo(): void {
        console.log(`${this._name} + ${this._age} + ${this._canFly}`);
    }
}

class AnimalFactory {

    public static createAnimal(className: unknown, firstParam: string, secondParam: number, thirdParam: string | Color | boolean): IAnimal {
        if (className === DogClass) {
            return new DogClass(firstParam, secondParam, thirdParam as string);
        }
        else if (className === CatClass) {
            return new CatClass(firstParam, secondParam, thirdParam as Color);
        }
        else if (className === BirdClass) {
            return new BirdClass(firstParam, secondParam, thirdParam as boolean);
        }
        

        throw new Error("Unknown type of an animal.");
        
    }
}

let dog: DogClass = AnimalFactory.createAnimal(DogClass, 'Duke', 4, 'pudel') as DogClass;
let cat: CatClass = AnimalFactory.createAnimal(CatClass, 'Lion', 6, new Color('orange')) as CatClass;
let bird: BirdClass = AnimalFactory.createAnimal(BirdClass, 'Stormherald', 23, true) as BirdClass;

dog.fetch();
dog.makeSound();
console.log(`${dog._name} ${dog._age} ${dog._breed}`);

cat.climpTree();
cat.makeSound();
console.log(`${cat._name} ${cat._age} ${cat._color._color}`);

bird.fly();
bird.makeSound();
console.log(`${bird._name} ${bird._age} ${bird._canFly}`);

class AnimalShelter<T extends IAnimal> {
    private _animals: Array<T> = new Array<T>();

    public addAnimal(newAnimal: T): void {
        if (!this._animals.includes(newAnimal)) {
            this._animals.push(newAnimal);
        }
        else {
            console.log("This animal in the list yet")
        }
    }

    public removeAnimal(animal: T): void {
        if (this._animals.includes(animal)) {
            this._animals = this._animals.filter(function(item) {
                return item != animal;
            })
        }
        else {
            console.log("Can't find animal, check your info");
        }
    }

    public showAnimals(): void {
        for (let i = 0; i < this._animals.length; i++) {
            console.log(this._animals[i].showInfo());
        }
    }
}

let animalShelter: AnimalShelter<IAnimal> = new AnimalShelter<IAnimal>();

animalShelter.addAnimal(dog);
animalShelter.addAnimal(dog);
animalShelter.addAnimal(cat);
animalShelter.addAnimal(bird);

animalShelter.showAnimals();