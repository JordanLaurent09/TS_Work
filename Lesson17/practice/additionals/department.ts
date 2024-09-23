import { Company } from "./employee";
export class Department {
    constructor(private _departmentName: string, private _employees: Array<Company.Employee>) {}

    public addEmployee(newEmployee: Company.Employee): void {
        if (!this._employees.includes(newEmployee)) {
            this._employees.push(newEmployee);
            console.log("Новый сотрудник успешно добавлен в БД");
        }
        else {
            console.log("Такой человек уже трудится в нашей компании! Я вызываю полицию");
        }
    }

    public getEmployees(): string {
        let info: string = '';
        for (let i = 0; i < this._employees.length; i++) {
            info += `${this._employees[i].getInfo()}\n`;
        }
        return info;
    }
}