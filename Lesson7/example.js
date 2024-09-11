"use strict";
class Person {
    constructor(name, age, mail, phone) {
        this.name = name;
        this.age = age;
        this.mail = mail;
        this.phone = phone;
    }
    getContactInfo() {
        return `С ${this.name} можно связаться по телефону: ${this.phone}`;
    }
}
class Employee extends Person {
    constructor(name, age, mail, phone, experience, salary) {
        super(name, age, mail, phone);
        this.experience = experience;
        this.salary = salary;
    }
    getEmployeeInfo() {
        return `${this.name} с ${this.experience} годами опыта работы получает: ${this.salary} денег`;
    }
}
class Manager extends Employee {
    constructor(name, age, mail, phone, experience, salary, department) {
        super(name, age, mail, phone, experience, salary);
        this.department = department;
    }
    getManagerInfo() {
        return `${this.name} управляет отделом ${this.department}`;
    }
    getFullInfo() {
        return `${this.getContactInfo()}\n${this.getEmployeeInfo()}\n${this.getManagerInfo()}`;
    }
}
const person = new Person("Сергей", 32, "sun-speak@mail.ru", "89521196218");
const worker = new Employee("Сергей", 32, "sun-speak@mail.ru", "89521196218", 1.5, 200000.00);
const manager = new Manager("Сергей", 32, "sun-speak@mail.ru", "89521196218", 1.5, 200000.00, "IT");
console.log(person.getContactInfo());
console.log(worker.getContactInfo());
console.log(worker.getEmployeeInfo());
console.log(manager.getContactInfo());
console.log(manager.getEmployeeInfo());
console.log(manager.getManagerInfo());
console.log(manager.getFullInfo());
