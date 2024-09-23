import { Company } from "./additionals/employee";
import { Department } from "./additionals/department";

var shuraev: Company.Employee = new Company.Employee("Сергей Шураев Валентинович", 32, "Начальник отдела инженеров ПО");
var peter: Company.Employee = new Company.Employee("Peter Peterson", 20, "инженер ПО");

var employees: Array<Company.Employee> = new Array();

employees.push(shuraev);
employees.push(peter);

var myDepartment: Department = new Department("Отдел инженеров ПО", employees);

var cemik: Company.Employee = new Company.Employee("Александр Лубенец", 36, "ведущий инженер-программист");

myDepartment.addEmployee(cemik);

console.log(myDepartment.getEmployees());