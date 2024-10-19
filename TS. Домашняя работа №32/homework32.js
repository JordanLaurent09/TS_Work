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
function ValidateSql(target, propertyKey, parameterIndex) {
    var existingLoggedParameters = Reflect.getOwnMetadata('logParameters', target, propertyKey) || [];
    existingLoggedParameters.push(parameterIndex);
    Reflect.defineMetadata('logParameters', existingLoggedParameters, target, propertyKey);
}
function LogExecution(target, propertyKey, descriptor) {
    var intruderDetector = /\bselect\b|\bfrom\b|\bwhere\b|\bset\b|\bupdate\b|\bdelete\b/i;
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var loggedParameters = Reflect.getOwnMetadata('logParameters', target, propertyKey) || [];
        loggedParameters.forEach(function (index) {
            var parameterValue = args[index];
            if (intruderDetector.test(parameterValue)) {
                console.warn("You have entered restricted area!");
                throw new Error("SQL-injection detected!");
            }
            console.log("\u041C\u0435\u0442\u043E\u0434: ".concat(propertyKey, " \u0418\u043D\u0434\u0435\u043A\u0441 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430: ").concat(index, " \u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430: ").concat(parameterValue));
        });
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.setWeakData = function (weakData) {
        this.weakData = weakData;
    };
    __decorate([
        LogExecution,
        __param(0, ValidateSql),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], Person.prototype, "setWeakData", null);
    return Person;
}());
var person = new Person("lol", 11);
try {
    person.setWeakData('update values where name=user');
}
catch (e) {
    console.error(e.message);
}
