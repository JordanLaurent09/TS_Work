"use strict";
var WeekDay;
(function (WeekDay) {
    WeekDay[WeekDay["Monday"] = 0] = "Monday";
    WeekDay[WeekDay["Tuesday"] = 1] = "Tuesday";
    WeekDay[WeekDay["Wednesday"] = 2] = "Wednesday";
    WeekDay[WeekDay["Thursday"] = 3] = "Thursday";
    WeekDay[WeekDay["Friday"] = 4] = "Friday";
    WeekDay[WeekDay["Saturday"] = 5] = "Saturday";
    WeekDay[WeekDay["Sunday"] = 6] = "Sunday";
})(WeekDay || (WeekDay = {}));
let day = WeekDay.Friday;
console.log(day);
function isWeekend(day) {
    return day === WeekDay.Saturday || day === WeekDay.Sunday;
}
console.log(isWeekend(WeekDay.Monday));
console.log(isWeekend(WeekDay.Saturday));
var Fruits;
(function (Fruits) {
    Fruits[Fruits["Orange"] = 0] = "Orange";
    Fruits[Fruits["Apple"] = 1] = "Apple";
    Fruits[Fruits["Groosha"] = 2] = "Groosha";
    Fruits[Fruits["Banana"] = 3] = "Banana";
    Fruits[Fruits["Mango"] = 4] = "Mango";
    Fruits[Fruits["Marakuia"] = 5] = "Marakuia";
    Fruits[Fruits["Coconut"] = 6] = "Coconut";
})(Fruits || (Fruits = {}));
let myFavoriteFruit = Fruits.Orange;
console.log(`My favorite fruit is ${myFavoriteFruit}. It have round form and orange color, has nice taste and many vitamins`);
let fruitsArray = new Array();
for (const key in Fruits) {
    fruitsArray.push(key);
}
for (let i = 0; i < fruitsArray.length; i++) {
    console.log(fruitsArray[i]);
}
let randomFruitIndex = Math.ceil(Math.random() * fruitsArray.length);
let randomFruit = fruitsArray[randomFruitIndex];
console.log(randomFruit);
function getFruitInfo(fruit) {
    let value = fruit;
    switch (value) {
        case 0:
            console.log("Апельсин ЖЖЕТ мое тело, наполняет меня ВИТАМИНАМИ и продлевает мою ЖИЗНЬ");
            break;
    }
}
getFruitInfo(Fruits.Orange);
