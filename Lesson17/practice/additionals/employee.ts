export namespace Company {
    export class Employee {
        constructor(private _name: string, private _age: number, private _occupation: string) {}

        public getInfo(): string {
            return `Вас зовут ${this._name}, Вам ${this._age} лет, а работаете вы в отделе по названию ${this._occupation}.`;
        }
    }
}