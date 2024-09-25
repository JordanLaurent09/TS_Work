// Немного про unknown
/* let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Skameechka';

if (typeof userInput === 'string') {
    userInput.replace(' ', '');
} else if (typeof userInput === 'number') {
    userInput.toExponential();
}


function getUserInput(): unknown {
    let input = prompt('enter ur name');
    return input;
}

let newUserInput: unknown = getUserInput();

if (typeof newUserInput === 'string') {
    console.log(`Привет, ${newUserInput.toUpperCase()}`);
} */



/* interface UserProfile {
    Id: string;
    name: string;
}

function fetchData() {
    return {
        id: 10,
        name: 'Иван'
    };
}

function getUserProfile(): unknown {
    let data = fetchData();
    return data;
}

function isUserProfile(data: any): data is UserProfile {
    return typeof data === 'object' && 'id' in data && 'name' in data;
}

let userData: unknown = getUserProfile();

if (isUserProfile(userData)) {
    console.log(`User profile is: ${userData.name}`);

} else {
    console.log('idk');
} */

// userData instanceof UserProfile - ТОЛЬКО ЕСЛИ UserProfile ЯВЛЯЕТСЯ КЛАССОМ!!!


// Немного про any
/* let inputUser: any;

inputUser = 'true 5';

function doSomethingWithAny(any: {
    name: {
        firstSymbol: {
            toUpperCase: () => void;
        }
    }
}): any {
    any.name.firstSymbol.toUpperCase();
} */


// про объекты

/* let person: object = {
    name: 'Иннокентий',
    age: 30
}

let numbers: object = [20, 21, 27]; */


// Object - принимает ВСЕ, у чего есть КЛАСС
/* let obj: Object;


obj = {};
obj = [];
obj = new Object();
obj = new Date();
obj = new Map();

obj = () => {}

obj = 5;
obj = 'something in the air'; */

// Кортежи

/* let tuple: [number, string] = [10, 'строка'];
console.log(tuple[0]);
console.log(tuple[1]); */


// Функции
/* let func: Function = function(a: number, b: string) : void {

} */


type AdminAction = 'CREATE' | 'ACTIVATE';

const showAdminMessage = (action: AdminAction): string => {
    switch (action) {
        case 'CREATE':
            return 'CREATED';
        case 'ACTIVATE':
            return 'ACTIVATED';
        default:
            throw new Error("Я ПЛЮНУЛ в тебя исключением, старина");
    }
}