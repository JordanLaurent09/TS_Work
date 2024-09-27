"use strict";
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
function padLeft(value, padding /*еще можно напиcать unknown */) {
    //************************************************ */
    if (typeof padding === 'string') {
        return " ".toLowerCase();
    }
    if (typeof padding === 'number') {
        return 34; //TYPE GUARD
    }
    if (padding === null) {
        return 'pizza';
    }
    throw new Error("Unknown type exception");
    /************************************************* */
}
const showPersonInfo = (person) => {
    if ('privileges' in person) {
        console.log(`Привилегии: ${person.privileges.join(', ')}`);
    }
    else if ('email' in person) {
        console.log(`Эл.почта: ${person.email}`);
    }
};
let admin = {
    name: "Johnny",
    privileges: ['Привет', 'Пока']
};
let user = {
    name: "Nobody",
    email: "nooneknows@dog"
};
showPersonInfo(admin);
showPersonInfo(user);
