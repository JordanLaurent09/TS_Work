"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
class Department {
    constructor(_departmentName, _employees) {
        this._departmentName = _departmentName;
        this._employees = _employees;
    }
    addEmployee(newEmployee) {
        if (!this._employees.includes(newEmployee)) {
            this._employees.push(newEmployee);
            console.log("Новый сотрудник успешно добавлен в БД");
        }
        else {
            console.log("Такой человек уже трудится в нашей компании! Я вызываю полицию");
        }
    }
    getEmployees() {
        let info = '';
        for (let i = 0; i < this._employees.length; i++) {
            info += `${this._employees[i].getInfo()}\n`;
        }
        return info;
    }
}
exports.Department = Department;
