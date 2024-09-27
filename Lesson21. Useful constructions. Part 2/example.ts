/* type Person = {
    name: string;
    age: number;
    address: {
        street: string;
        city: string;
    }
}

type PersonName = Person['name'];

type PersonAge = Person['age'];

type PersonAddress = Person['address'];

let address: PersonAddress = {
    street: "Proletarskaya",
    city: "Kaliningrad"
}

type StringArray = string[]; // Псевдоним типа массива


type StringArrayElement = StringArray[number]; // Тип элемента массива */

/* type Person = {
    name: string;
    age: number;
    address: {
        street: string;
        city: string;
    }
}

type PersonNameOrAge = Person['name' | 'age']; */


/* type Car = {
    make: string;
    model: string;
    year: number;
}

type CarMake = Car['make'];
type CarModel = Car['model'];
type CarYear = Car['year']; */


/* type Company = {
    name: string;
    address: {
        street: string;
        city: string;
    }
    employees: {
        name: string,
        role: string
    }
}

type AddressType = Company['address']['city']; */



/* type Car = {
    make: string;
    model: string;
    year: number;
    isElectric: boolean
}

let vehicles = [
    {
        make: "USA",
        model: "Cougar Mercury",
        year: 1967,
        isElectric: false
    },
    {
        make: "USSR",
        model: "Volga",
        year: 1969,
        isElectric: false
    },
    {
        make: "Italy",
        model: "Ferrari",
        year: 2024,
        isElectric: true
    }

];

type Vehicle = typeof vehicles[number]['model']; */


function padLeft(value: string, padding: number | string | null /*еще можно напиcать unknown */) {
    //************************************************ */
    if (typeof padding === 'string') {
        return " ".toLowerCase();
    }
    if (typeof padding === 'number') {
        return 34;                                   //TYPE GUARD
    } 
    if (padding === null) {
        return 'pizza';
    }
    throw new Error("Unknown type exception");
    /************************************************* */
}



/* class Dog {
    bark() {
        console.log("Bark");
    }
}

class Cat {
    meow() {
        console.log("Meow");
    }
}


// typeof для примитивов (которые с МАЛЕНЬКОЙ буквы)
// instanceof для классовых типов (с большой буквы)
const makeNoise = (pet: Dog | Cat) => {
    if (pet instanceof Dog) {
        pet.bark();
    } else if (pet instanceof Cat) {
        pet.meow();
    }
} */


type Admin = {
    name: string;
    privileges: string[];
}

type User = {
    name: string;
    email: string;
}

type Person = Admin | User;

const showPersonInfo = (person: Person) => {
    if ('privileges' in person) {
        
        console.log(`Привилегии: ${person.privileges.join(', ')}`);
    } else if ('email' in person) {
        console.log(`Эл.почта: ${person.email}`)
    }

}


let admin: Admin = {
    name: "Johnny",
    privileges: ['Привет', 'Пока']
}

let user: User = {
    name: "Nobody",
    email: "nooneknows@dog"
}

showPersonInfo(admin);
showPersonInfo(user);


type Fish = { swim: () => void };
type Bird = { fly: () => void };


function isFish(unknownAnimal: Fish | Bird): unknownAnimal is Fish {
    return (unknownAnimal as Fish).swim !== undefined;
}

function move(animal: Fish | Bird) {
    if (isFish(animal)) {
        animal.swim();
    }
    else animal.fly();
}

let realBird: Bird = { fly: () => {console.log("I can fly")}};
let realFish: Fish = { swim: () => {console.log("I can swim")}};

move(realBird);
move(realFish);