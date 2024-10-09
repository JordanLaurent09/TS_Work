// Регулярные выражения - способ работы со строками на основе шаблонизации
/* const regex = /hello/i;
console.log(regex.test("Hello, world")) */;

const pattern = 'hello';
const flag = 'i';

const regex = new RegExp(pattern, flag);
console.log(regex.test("Hello, world"));
console.log(regex.test("HI"));