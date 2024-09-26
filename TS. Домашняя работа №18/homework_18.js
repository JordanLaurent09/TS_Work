"use strict";
function findMax(array, compareFunc) {
    let max = array[0];
    if (compareFunc) {
        for (let i = 0; i < array.length; i++) {
            if (compareFunc(array[i], max) > 0) {
                max = array[i];
            }
        }
    }
    else if (typeof (max) == 'string' || typeof (max) == 'number' || typeof (max) == 'boolean') {
        for (let i = 1; i < array.length; i++) {
            if (max < array[i]) {
                max = array[i];
            }
        }
    }
    return max;
}
let numberMaximum = findMax([3, 5, 0, 11, 23, 6, 2, 24, 27]);
let stringMaximum = findMax(['skies', 'forest', 'waterfall', 'Sekeshfehervar']);
let carMaximum = findMax([{ brand: 'Mitsubishi', price: 20000 }, { brand: 'Mercedes', price: 21000 }, { brand: 'Cougar', price: 22000 }], (a, b) => a.price - b.price);
console.log(numberMaximum);
console.log(stringMaximum);
console.log(carMaximum);
