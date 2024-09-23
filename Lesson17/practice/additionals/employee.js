"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
var Company;
(function (Company) {
    class Employee {
        constructor(_name, _age, _occupation) {
            this._name = _name;
            this._age = _age;
            this._occupation = _occupation;
        }
        getInfo() {
            return `Вас зовут ${this._name}, Вам ${this._age} лет, а работаете вы в отделе по названию ${this._occupation}.`;
        }
    }
    Company.Employee = Employee;
})(Company || (exports.Company = Company = {}));
