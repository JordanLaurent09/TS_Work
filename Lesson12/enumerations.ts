enum WeekDay {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

let day: WeekDay = WeekDay.Friday;
console.log(day);

function isWeekend(day: WeekDay): boolean {
    return day === WeekDay.Saturday || day === WeekDay.Sunday;
}

console.log(isWeekend(WeekDay.Monday));
console.log(isWeekend(WeekDay.Saturday));



enum Fruits {
    Orange,
    Apple,
    Groosha,
    Banana,
    Mango,
    Marakuia,
    Coconut
}


let myFavoriteFruit: Fruits = Fruits.Orange;

console.log(`My favorite fruit is ${myFavoriteFruit}. It have round form and orange color, has nice taste and many vitamins`);

let fruitsArray: Array<string> = new Array<string>();

for (const key in Fruits) {
    fruitsArray.push(key);
}

for (let i = 0; i < fruitsArray.length; i++) {
    console.log(fruitsArray[i]);

}

let randomFruitIndex = Math.ceil(Math.random() * fruitsArray.length);

let randomFruit = fruitsArray[randomFruitIndex];

console.log(randomFruit);

function getFruitInfo(fruit: Fruits): void {
    let value: number = fruit;

    switch(value) {
        case 0:
            console.log("Апельсин ЖЖЕТ мое тело, наполняет меня ВИТАМИНАМИ и продлевает мою ЖИЗНЬ");
            break;
        case 1:
            console.log("Яблоко спасает меня от вредоносных паров большого города");
            break;
        case 2:
            console.log("Груша очень сладкая, люблю ВГРЫЗАТЬСЯ в ее сладкую плоть");
            break;
        case 3:
            console.log("Банан - зкзотический фрукт из далеких южных стран, наполняет меня ЗАДУМЧИВОСТЬЮ");
            break;
        case 4:
            console.log("Плохо понимаю, что это такое - МАНГО. Я еще не настолько преисполнился в своем ПОЗНАНИИ");
            break;
        default: 
            console.log("Я не люблю такое!!!");

    }
}

getFruitInfo(Fruits.Orange);
