// Условные типы

// 1. Тернарный оператор

// const age = 20;
// const message = age >= 18 ? "adult" : "notAdult";

/* const score = 85;
const grade = score >= 90 ? 'A' : 
    score >= 80 ? 'B' : 
    score >= 70 ? 'C' :
    score >= 60 ? 'D' :
    score >= 50 ? 'E' :
    'Useless' */

/* function getFee(isMember: boolean): number {
    return isMember ? 2 : 10;
} */

// 2. Conditional Types in TS

//   условие     T : F
// T extends U ? X : Y

// type IsString<T> = T extends string ? 'Yes' : 'No';


// Фильтрация с условными типами

// type Diff<T, U> = T extends U ? never : T;


/* type NotNull<T> = T extends null | undefined ? never : T;

type A = NotNull<string | number | undefined>;
type B = NotNull<number | null | undefined>; */


// Условные типы с распределением
/* type Extraction<T, U> = T extends U ? T : never;

type A = Extraction<string | number | boolean, string>; */

/* type TypeReturning<T> = T extends (...args: any[]) => infer R ? R : any; // infer позволяет СОХРАНИТЬ возвращаемый тип функции

function f1() : string {
    return 'Hello';
}

type A = TypeReturning<typeof f1>;
type B = ReturnType<typeof f1>; */

type Some = {
    id: number;
    name: string;
    address: {
        city: string;
        street: string;
    }
}

//type readSome = Readonly<Some>;

type ReadonlyType<T> = {
    readonly [Property in keyof T] : ReadonlyType<T[Property]>; // В этом случае внутренние поля в address также станут readonly
}

let me: ReadonlyType<Some> = {
    id: 1,
    name: 'Sergey',
    address: {
        city: 'Kaliningrad',
        street: 'Proletarskaya'
    }
}

//me.address.city = 'wee';