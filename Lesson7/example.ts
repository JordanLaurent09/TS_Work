class Person {
    name: string;
    age: number;
    mail: string;
    phone: string;

    constructor(name: string, age: number, mail: string, phone: string) {
        this.name = name;
        this.age = age;
        this.mail = mail;
        this.phone = phone;
    }

    getContactInfo(): string {
        return `С ${this.name} можно связаться по телефону: ${this.phone}`
    }
}

class Employee extends Person {
    experience: number;
    salary: number;

    constructor(name: string, age: number, mail: string, phone: string, experience: number, salary: number) {
        super(name, age, mail, phone);
        this.experience = experience;
        this.salary = salary;
    }

    getEmployeeInfo(): string {
        return `${this.name} с ${this.experience} годами опыта работы получает: ${this.salary} денег`;
    }
}

class Manager extends Employee {
    department: string;

    constructor(name: string, age: number, mail: string, phone: string, experience: number, salary: number, department: string) {
        super(name, age, mail, phone, experience, salary);
        this.department = department;
    }

    getManagerInfo(): string {
        return `${this.name} управляет отделом ${this.department}`;
    }

    getFullInfo(): string {
        return `${this.getContactInfo()}\n${this.getEmployeeInfo()}\n${this.getManagerInfo()}`
    }
}

const person: Person = new Person ("Сергей", 32, "sun-speak@mail.ru", "89521196218");
const worker: Employee = new Employee("Сергей", 32, "sun-speak@mail.ru", "89521196218", 1.5, 200000.00);
const manager: Manager = new Manager("Сергей", 32, "sun-speak@mail.ru", "89521196218", 1.5, 200000.00, "IT");

console.log(person.getContactInfo());
console.log(worker.getContactInfo());
console.log(worker.getEmployeeInfo());
console.log(manager.getContactInfo());
console.log(manager.getEmployeeInfo());
console.log(manager.getManagerInfo());
console.log(manager.getFullInfo());
