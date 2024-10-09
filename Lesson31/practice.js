"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function GetMeta(target, propertyKey, parameterIndex) {
    var existingLoggedParameters = Reflect.getOwnMetadata('logParameters', target, propertyKey) || [];
    existingLoggedParameters.push(parameterIndex);
    Reflect.defineMetadata('logParameters', existingLoggedParameters, target, propertyKey);
}
function ValidateMethod(target, key, descriptor) {
    var method = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var metadata = Reflect.getOwnMetadata('logParameters', target, key) || [];
        console.log(metadata[0]);
        console.log(typeof metadata[0]);
        if (args[metadata[0]] > 100 || args[metadata[0]] < 0) {
            throw new Error("You are unborn or reborn");
        }
        else {
            console.log("\u041C\u0435\u0442\u043E\u0434 \u0441 \u0438\u043C\u0435\u043D\u0435\u043C ".concat(key, " \u043F\u0435\u0440\u0432\u044B\u043C \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u043E\u043C \u0438\u043C\u0435\u0435\u0442 ").concat(metadata[0], ", \u0430 \u0432\u0442\u043E\u0440\u044B\u043C -  ").concat(metadata[1]));
        }
        return method.apply(this, args);
    };
    return descriptor;
}
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this, age = age;
    }
    Person.prototype.changePersonData = function (name, age) {
        this.name = name;
        this.age = age;
    };
    __decorate([
        ValidateMethod,
        __param(0, GetMeta),
        __param(1, GetMeta),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], Person.prototype, "changePersonData", null);
    return Person;
}());
var person = new Person("Джонни", 21);
person.changePersonData("Томми", 111);
