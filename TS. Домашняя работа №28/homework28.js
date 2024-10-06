"use strict";
async function delayFunction(num) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Текущее число: ${num}`);
        }, 1000);
    });
}
async function* asyncGen(firstNumber, lastNumber) {
    for (let i = firstNumber; i <= lastNumber; i++) {
        yield await delayFunction(i);
    }
}
async function runDelayedRange() {
    let generatorAsync = asyncGen(1, 21);
    let timer = 1;
    for await (let number of generatorAsync) {
        console.log(`${number} (через ${timer} сек)`);
        timer++;
    }
}
runDelayedRange();
