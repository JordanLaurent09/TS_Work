"use strict";
class MyList {
    constructor() {
        this._innerArray = [];
    }
    // добавление элементов
    add(newItem) {
        if (newItem != null || newItem != undefined) {
            this._innerArray.push(newItem);
        }
    }
    // удаление элементов
    remove(deprecateItem) {
        if (deprecateItem != null || deprecateItem != undefined) {
            if (this._innerArray.includes(deprecateItem)) {
                let deprecatedIndex = this._innerArray.lastIndexOf(deprecateItem);
                let firstIndex = 0;
                let temp = this._innerArray[deprecatedIndex];
                this._innerArray[deprecatedIndex] = this._innerArray[firstIndex];
                this._innerArray[firstIndex] = temp;
                this._innerArray.shift();
            }
        }
    }
    // методы max/min
    max() {
        let max = this._innerArray[0];
        for (let i = 0; i < this._innerArray.length; i++) {
            if (max < this._innerArray[i]) {
                max = this._innerArray[i];
            }
        }
        return max;
    }
    min() {
        let min = this._innerArray[0];
        for (let i = 0; i < this._innerArray.length; i++) {
            if (min > this._innerArray[i]) {
                min = this._innerArray[i];
            }
        }
        return min;
    }
    // Метод count
    count(predicate) {
        let count = 0;
        this._innerArray.forEach(element => {
            if (predicate(element)) {
                count++;
            }
        });
        return count;
    }
    // Метод reverse
    reverse() {
        let reverseArray = [];
        for (let i = this._innerArray.length - 1; i >= 0; i--) {
            reverseArray.push(this._innerArray[i]);
        }
        this._innerArray = reverseArray;
    }
    // Метод divide
    divide(parts) {
        let outerArray = [];
        let innerArray = [];
        let partCapacity = Math.ceil(this._innerArray.length / parts);
        for (let i = 0; i < this._innerArray.length; i += partCapacity) {
            for (let j = i; j < i + partCapacity; j++) {
                if (this._innerArray[j] != undefined) {
                    innerArray.push(this._innerArray[j]);
                }
            }
            outerArray.push(innerArray);
            innerArray = [];
        }
        return outerArray;
    }
}
let myList = new MyList();
myList.add(2);
myList.add(18);
myList.add(2);
myList.add(44);
myList.add(21);
myList.add(2);
myList.add(8);
console.log(myList);
myList.remove(44);
myList.remove(2);
console.log(myList);
console.log(myList.count(element => element == 2));
myList.reverse();
console.log(myList);
console.log(myList.divide(2));
