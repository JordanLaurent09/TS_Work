/* const regex = /hello/i; // Красное - паттерн регулярного выражения, i - регистронезависимый поиск
console.log(regex.test("Hello, world")); */

/* const pattern = 'hello';
const flag = 'i';

const regex = new RegExp(pattern, flag);
console.log(regex.test("Hello, world"));*/


/* const regex = /friend/i;
const result = regex.exec("Hello, my dear friend");
console.log(result); */

/* const str = 'hello, world!, hello';
const regex = /hello/gi;
const matches = str.match(regex);
console.log(matches); */

/* const str = 'hello, world! hello';
const regex = /hello/gi;
const newStr = str.replace(regex, 'Hi');

console.log(newStr); */



/*
СИМВОЛЫ
\. - любой одиночный символ, кроме новой строки
\d - любая цифра [0 - 9]
\D - любой символ, КРОМЕ цифры
\w - любой алфавитно - цифровой символ
\W - любой символ, КРОМЕ алфавитно - цифрового
\s - любой пробельный символ
\S - любой символ, КРОМЕ пробельного
КВАНТИФИКАТОРЫ
* - 0 или более вхождений
+ - 1 или более вхождений
? - 0 или 1 вхождение
{n} - конкретное количество вхождений, где n - количество
{n,} - количество вхождений от n и более
{n, m} - количество вхождений от n до m
ЯКОРЯ
^ - начало строки
$ - конец строки
\b - граница слова
\B - не граница слова
ГРУППИРОВКА И АЛЬТЕРНАТИВЫ
() - группировка
| - альтернатива (как логическая ИЛИ)
*/

/* str = 'слово слово     слово         слово слово                                                        слово';
const regex = /\s+/;
const parts = str.split(regex);
console.log(parts); */

/* const companyName = 'Valeryy & Anatolyy CO';
const regex = /\s\W\s/;
const parts = companyName.split(regex);
console.log(parts); */

/* const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailRegex.test('example@mail.ru'));
console.log(emailRegex.test('example.com')); */


/* const text = 'hello, world, this is a test';
const words = text.match(/\b[^\w]+\b/g);

console.log(words); */


/* const text = "Мой номер телефона 123-456-7890";
const newText = text.replace(/\d/g, "#");
console.log(newText); */


const regex = /\u{263A}/u; // флаг u обозначает Unicode, смекаешь?
console.log(regex.test("\u263A"));