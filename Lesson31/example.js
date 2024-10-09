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
/* function LogParameter(target: any, propertyKey: string, parameterIndex: number) {
    console.log(target);
    console.log(propertyKey);
    console.log(parameterIndex);
} */
function LogParameter(target, propertyKey, parameterIndex) {
    var existingLoggedParameters = Reflect.getOwnMetadata('logParameters', target, propertyKey) || [];
    existingLoggedParameters.push(parameterIndex);
    Reflect.defineMetadata('logParameters', existingLoggedParameters, target, propertyKey);
}
function LogMethod(target, key, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var loggedParameters = Reflect.getOwnMetadata('logParameters', target, key) || [];
        // Логируем значение параметров
        loggedParameters.forEach(function (index) {
            var parametrValue = args[index];
            console.log("\u041C\u0435\u0442\u043E\u0434 ".concat(key, ", \u0418\u043D\u0434\u0435\u043A\u0441 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430: ").concat(index, ", \u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u0430\u043C\u0435\u0442\u0440\u0430: ").concat(parametrValue));
        });
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
var ExampleClass = /** @class */ (function () {
    function ExampleClass() {
    }
    ExampleClass.prototype.greet = function (message, name) {
        console.log("".concat(name, " \u043D\u0430\u043F\u0438\u0441\u0430\u043B \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435: \"").concat(message, "\""));
    };
    __decorate([
        LogMethod,
        __param(0, LogParameter),
        __param(1, LogParameter),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String]),
        __metadata("design:returntype", void 0)
    ], ExampleClass.prototype, "greet", null);
    return ExampleClass;
}());
var ex = new ExampleClass();
ex.greet("Привет, друг", "Иван");
