// логический тип
let isAvailable: boolean = true;
let isComplete: boolean = false;

console.log(isAvailable);
console.log(isComplete);

// числовой тип
let temperature: number = 23.5;
let count: number = 5;

let decimal: number = 255;
let hex: number = 0xff;
let binary: number = 0b1111111;
let octan: number = 0o377;


// cтроковый тип данных
let myName: string = "Valentine";
let city: string = "Kaliningrad";
let info: string = `Город ${city}`;


// тип больших чисел
let largeNumber1: bigint = BigInt(938746238974623949234932849);
let largeNumber2: bigint = 938746238974623949234932849n;


// любой (универсальный) тип данных - ИМ ЛУЧШЕ НЕ ПОЛЬЗОВАТЬСЯ!!!!!!!111!!!!1111
let dynamicValue: any = true;


// неизвестный тип
let uncertainValue: unknown = 'Привет мир';

if (typeof uncertainValue === 'string') {
    console.log(uncertainValue.toUpperCase())
    
} else if (typeof uncertainValue === 'number') {
    console.log(uncertainValue + 50);
}


// ничего не возвращающий тип данных
function logMessage() : void {
    console.log("hi");
}

// типы null и undefined
let nullable: null = null;
let undefineable: undefined = undefined;


// тип, никогда не возвращающий значения
function example() : never {
    throw new Error();
}

// коллекции
// массив
let numberArray: number[] = [1, 2, 3, 4];
let stringArray: Array<string> = ['hi', 'you', '!'];
let tuple: [string, number] = ['word', 24];

let uniqueData: Set<number> = new Set([1, 2, 4, 4]); // вернет 1, 2, 4

let dictionary: Map<string, number> = new Map();
dictionary.set('first', 1);
dictionary.set('second', 2);