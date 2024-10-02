// 1.
type CheckString<T> = T extends string ? true : false; 

let one: CheckString<string>;
let two: CheckString<number>;
let three: CheckString<boolean>;

// 2.
type ReturnTypeOfFunction<T> = T extends (...args: any) => infer R ? R : any; 


// 3.
type ElementType<T> = T extends any[] ? T[number] : never;

type numbers = ElementType<number[]>;
