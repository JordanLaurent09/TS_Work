// Утилитарные типы
// 1. Partial<T>
/* type User = {
    name: string;
    age: number;
    password: string;

}

type OptionalUser = Partial<User>;

const user: User = {
    name: 'Valery',
    age: 32,
    password: 'pass'
} */
/* interface User {
    name: string;
    age: number;
    mail: string;
}

function updateUser(user: User, updates: Partial<User>): User {
    return {
        ...user, 
        ...updates
    }
}

let user: User = {
    name: 'Valeryy',
    age: 32,
    mail: 'ivanov@mail.ru'
}

let newUser = updateUser(user, {age: 35}) */

// 2. Readonly<T>
/* interface User {
    name: string;
    age: number;
    mail: string;
}

const user: Readonly<User> = {
    name: 'Valeryy',
    age: 32,
    mail: 'ivanov@mail.ru'
}

// как мы раньше присваивали readonly
type CustomReadonly<IncomimgType> = {
    readonly[Property in keyof IncomimgType]: IncomimgType[Property]
} */

/* class User {
    constructor(public name: string, public age: number, public mail: string) {}
}

const user: Readonly<User> = new User('Valeryy', 32, 'ivanox@mail.ru'); */

// 3. Required<T>

/* interface User {
    name?: string;
    age?: number;
    mail?: string;
}

const user: Required<User> = {
    name: 'Valeryy', age: 32, mail: ''
}

function printUserInfo(user: Required<User>): void {
    console.log(`${user.age}${user.mail}${user.name}`);
}
printUserInfo({name: '', age: 0, mail: ''}); */

// 4. NonNullable<T>

interface User {
    name?: string;
    age?: number;
    mail?: string;
    pet: NonNullable<User>;
}

type nullablePet = Pet | null;

interface Pet {
    name: string;
}

type UserWithPet = NonNullable<User>;

let user: UserWithPet = {
    name: '',
    age: 32,
    mail: '',
    pet: null
}