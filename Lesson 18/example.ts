//const foo: () => void = () => {} так можно объявлять возвращаемый тип вида ФУНКЦИЯ


/* type MTHoPERATIONS = (a: number, b: string) => string;


let foo: MTHoPERATIONS = (a: number, b: string): string => {
    console.log(`Число ${a}`);
    return b;
}
 */


/* type Point = [number, number];

let point: Point = [20, 21];

type BooleanArr = boolean[];

let trueFalsedArr: BooleanArr = [true, true]; */




type Result<T> = {
    success: boolean;
    data: T;
    error?: string;
}


let successData: Result<number> = {
    success: true,
    data: 27,
    error: 'error'
}






/* class Some {
    constructor(public some: string | undefined | null) {}
}

let some: Some = new Some(undefined); */






/* type Person = {
    name: string;
    age: number;
}

type Employee = {
    employeeId: number;
}

type FullEmployee = Person & Employee;

let full: FullEmployee = {
    name: "Peter", age: 20, employeeId: 24
}

*/



/* type StringAlias = string;
type NumberAlias = number;

type Age = number;
type UserName = string;

class Person {
    private _name!: UserName;
    private _age!: Age;
}

type UserDefaults = {name: string, age: number};

let some: UserDefaults = {name: "Bogdan", age: 24};

type SuccessResponce = {
    status: 'Success',
    data: string;
}

type ErrorResponce = {
    status: 'Error',
    data: string;
}

type ApiResponce = SuccessResponce | ErrorResponce;

let responce: ApiResponce = {status: 'Success', data: "I am VICTORIUOS"}; */

