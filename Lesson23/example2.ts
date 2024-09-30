// Продолжение утилитарных функций
// 5. Pick<Type, Keys>/Omit<Type, Keys>

/* interface IUser {
    id: number,
    name: string,
    age: number,
    username: string,
    password: string,
    email: string
}

type AuthetificatingPerson = Pick<IUser, 'username' | 'password'>; // Создаёт с ключами
type OmittedAuthentificatingPerson = Omit<IUser, 'id' | 'name' | 'age' | 'mail'>; // Создаёт без ключей

function authentificateUser(incomingData: AuthetificatingPerson): boolean {

    return true;
}

const newUserForAuth: AuthetificatingPerson = {
    username: 'Valery',
    password: 'nice'
}

const omittedPerson: OmittedAuthentificatingPerson = {
    name: 'Valery',
    age: 'nice'
} */

// 6. Record<TKey, TValue>
/* type PersonKeys = 'name' | 'age' | 'address';

type PersonRecord = Record<PersonKeys, string>

const person: PersonRecord = {
    name: 'Valery',
    age: '32',
    address: 'Vice City'
} */
/* interface Employee {
    id: number;
    name: string;
    position: string;
}

type EmployeeRecord = Record<number, Partial<Employee>>;

const employeedictionary: EmployeeRecord = {
    1: { id: 1, position: 'Cleaner'},
    2: { id: 2, position: 'Carrier'},
    3: { id: 3, name: 'Innokenty', position: 'Cashier'},
}  */


// 7. Parameters
function greet(name: string, age: number): string {
    return `Bonjour! My name is ${name}, и мне ${age} лет`;
}

type GreetParameters = Parameters<typeof greet>

const funcArgs: GreetParameters = ['Valery', 34];


function logAndExecute<T extends (...args: any) => any>(fn: T) {
    return (...args: Parameters<T>): ReturnType<T> => {
        console.log(args)
        return fn(...args);
    }
}

function add(a: number, b: number): number {
    return a + b;
}

const loggerAdd = logAndExecute(add);

console.log(loggerAdd(2, 15));

