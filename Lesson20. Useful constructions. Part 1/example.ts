// spread demonstration
let arr: Array<number> = [1, 2, 3, 4, 5];

let second: Array<number> = [...arr, 6, 7, 8, 9];

let someObj: { name: string, age: number} = {
    name: 'Valery',
    age: 34
}

let secondObj: {name: string, age: number, eyeColor: string, height: number} = {
    ...someObj,
    eyeColor: 'GOLDEN BROWN',
    height: 178.4
}




// rest demonstration

function sum(...numbers: number[]): number {
    let summ: number = 0;

    numbers.forEach((number) => {
        summ += number;
    })

    return summ;
}


// keyof demostration
type Person = {
    name: string;
    age: number;
}

type PersonKeys = keyof Person; // 'name' | 'age

let peter: Person = {
    name: 'Peter',
    age: 20
}

let peterPart: PersonKeys = 'name';



// typeof demonstration
let str = 'hello';
let nmbr = 34;

type StrType = typeof str;
type NmbrType = typeof nmbr;


function func(param: typeof str | number): typeof nmbr | string {
    return 21;
}

