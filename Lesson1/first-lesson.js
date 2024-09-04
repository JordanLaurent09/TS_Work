"use strict";
// логический тип
let isAvailable = true;
let isComplete = false;
console.log(isAvailable);
console.log(isComplete);
// числовой тип
let temperature = 23.5;
let count = 5;
let decimal = 255;
let hex = 0xff;
let binary = 0b1111111;
let octan = 0o377;
// cтроковый тип данных
let myName = "Valentine";
let city = "Kaliningrad";
let info = `Город ${city}`;
// тип больших чисел
let largeNumber1 = BigInt(938746238974623949234932849);
let largeNumber2 = 938746238974623949234932849n;
// любой (универсальный) тип данных - ИМ ЛУЧШЕ НЕ ПОЛЬЗОВАТЬСЯ!!!!!!!111!!!!1111
let dynamicValue = true;
// неизвестный тип
let uncertainValue = 'Привет мир';
if (typeof uncertainValue === 'string') {
    console.log(uncertainValue.toUpperCase());
}
else if (typeof uncertainValue === 'number') {
    console.log(uncertainValue + 50);
}
// ничего не возвращающий тип данных
function logMessage() {
    console.log("hi");
}
// типы null и undefined
let nullable = null;
let undefineable = undefined;
// тип, никогда не возвращающий значения
function example() {
    throw new Error();
}
// коллекции
// массив
let numberArray = [1, 2, 3, 4];
let stringArray = ['hi', 'you', '!'];
let tuple = ['word', 24];
let uniqueData = new Set([1, 2, 4, 4]); // вернет 1, 2, 4
let dictionary = new Map();
dictionary.set('first', 1);
dictionary.set('second', 2);
