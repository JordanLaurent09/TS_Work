"use strict";
/* function LogMethod(target: any, key: string, descriptor: PropertyDescriptor) {
    const original: any = descriptor.value;

    descriptor.value = function(...args: any[]) {
        console.log(`Метод ${key} вызван с аргументами ${args}`); // Новое поведение
        return original.apply(this, args);
    }
    return descriptor;
}

class MyClass {
    @LogMethod
    myMethod(arg1: number, arg2: string) {
        console.log(`Исполнение метода с ${arg1} и ${arg2}`);
    }
}

const instance: MyClass = new MyClass();
instance.myMethod(25, "Не хочу вспоминать этот возраст!"); */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function RestrictionDeco(target, key, descriptor) {
    const originalMethod = descriptor.value;
    const child = target; // чтобы не создавать "костыльную" надфункцию с isAdmin: Boolean
    descriptor.value = function (...args) {
        if (child.isAdmin) {
            throw new Error('Вы не администратор');
        }
        return originalMethod.apply(this, args);
    };
}
class MyClass {
    constructor() {
        this.isAdmin = true;
    }
    adminMethod() {
        console.log("Это доступно только админу");
    }
}
__decorate([
    RestrictionDeco
], MyClass.prototype, "adminMethod", null);
const myClass = new MyClass();
myClass.adminMethod();
class Person {
    constructor(name) {
        this.name = name;
    }
}
__decorate([
    Validate
], Person.prototype, "name", void 0);
let pers = new Person("Valeryy");
pers.name = "Peter";
function Validate(target, key) {
    let value = target[key];
    const getter = () => value;
    const setter = (newValue) => {
        if (typeof newValue !== 'string') {
            throw new Error("Argument Exception");
        }
        value = newValue;
    };
    Object.defineProperty(target, key, {
        enumerable: false,
        configurable: true,
        get: getter,
        set: setter,
        writable: true
    });
}
