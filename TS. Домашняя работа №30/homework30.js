"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function LogExecution(target, key, descriptor) {
    const method = descriptor.value;
    descriptor.value = function (...args) {
        let timeStart = new Date().getMilliseconds();
        console.log(`Метод с именем ${key} начал работать`);
        method.apply(this, args);
        let timeEnd = new Date().getMilliseconds();
        let fullTime = timeEnd - timeStart;
        console.log(`Метод с именем ${key} завершил работу за ${fullTime} мс`);
        return method;
    };
    return descriptor;
}
class TaskManager {
    processTask(taskName, func) {
        console.log(`Выполнение задачи ${taskName}`);
        func();
    }
}
__decorate([
    LogExecution
], TaskManager.prototype, "processTask", null);
const tasks = new TaskManager();
tasks.processTask("Вычисление суммы", () => {
    let sum = 0;
    for (let i = 0; i < 999999999; i++) {
        sum += i;
    }
    return sum;
});
tasks.processTask("Задача 2", () => {
    let arr = [34, 43, 232, 11, 55, 33, 3443, 65, 87, 33, 1, 34, 65, 776, 334];
    arr.sort();
    arr.reverse();
    let newArr = [
        arr,
        arr.reduce(function (acc, current) {
            return Math.min(acc, current);
        }),
        arr.reduce(function (acc, current) {
            return Math.max(acc, current);
        })
    ];
    return newArr;
});
