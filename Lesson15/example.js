"use strict";
function identity(arg) {
    return arg;
}
let numberOutput = identity(34);
let stringOutput = identity("Yes, I understand");
function getFirstElement(arr) {
    let value = arr[0];
    return value;
}
console.log(getFirstElement([1, 2, 3, 4, 5]));
function summ(first, second) {
    return first;
}
/* function dictionary<TKey, TValue>(key: TKey, value: TValue) {
    return {key, value};
} */
/* function dictionary<TKey, TValue>(keyValuePair: {key: TKey, value: TValue}): {key: TKey, value: TValue} {
    return {
        key: keyValuePair.key,
        value: keyValuePair.value
    }
} */
function dictionary(keyValuePair) {
    return {
        key: { name: keyValuePair.key.name,
            age: keyValuePair.key.age },
        value: keyValuePair.value
    };
}
//let dict = dictionary<string, number>("index", 25);
/* console.log(typeof(dict.key));
console.log(typeof(dict.value)); */
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j <= arr.length - 1; j++) {
            if (arr[i] >= arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(bubbleSort(["happiness", "luck", "Bogdan", "Metallica", "Roland Ironfist", "Archibald Ironfist"]));
function minValue(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (min >= arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
function maxValue(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max <= arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxValue([5, 1, 9, 11, 0, 33, 2, -23]));
