"use strict";
// MAP
/* const map: Map<string, number> = new Map<string, number>();
map.set("first", 25);
map.set("second", 30);
map.set("third", 35);
map.set("fourth", 40);
map.set("fifth", 45);

console.log(map.get('second')); // вернет значение ключа

if (map.has("fourth")) { // Проверка на существование ключа
    console.log("Key is exists");
}
else {
    console.log("it's nothing");
}

console.log(map.size); // Получение размера карты

// Цикл for/of итерирует коллекцию по ключам
for (let key of map.keys()) {
    console.log(key);
}

// Цикл for/of итерирует коллекцию по значениям
for (let value of map.values()) {
    console.log(value);
}

// (1 Вариант) Цикл for/of итерирует коллекцию
for (let pair of map) {
    console.log(pair);
}
// (2 Вариант) Цикл for/of итерирует коллекцию
for (let[key, value] of map.entries()) {
    console.log(`Ключ: ${key}\t Значение: ${value}`);
}


map.forEach(function(value, key) {
    console.log(value);
})

map.clear(); // Полностью очищает коллекцию */
/* let unusualMap: Map<object, boolean> = new Map<object, boolean>();

const obj1 = {
    name: "Valery",
    age: 32
}

const obj2 = {
    name: "Innokentyy",
    age: 16
}

unusualMap.set(obj1, obj1.age > 18);
unusualMap.set(obj2, obj2.age > 18);

console.log(unusualMap.get(obj1)); */
// SET
let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(4);
set.add(5);
set.add(6);
console.log(set);
console.log(set.has(6));
console.log(set.has(5));
console.log(set.size);
//set.clear();
set.delete(1);
console.log(set);
