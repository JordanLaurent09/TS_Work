abstract class BasePerson {
    public abstract  _name: string;
    public abstract _age: number;
    public abstract _sex: string;

    
}


class OldPerson extends BasePerson {
    public _name: string;
    public _age: number;
    public _sex: string;

    constructor(name: string, age: number, sex: string) {
        super();
        this._name = name;
        this._age = age;
        this._sex = sex;
    }
}


class BraveNewPerson extends BasePerson {
    public _name: string;
    public _age: number;
    public _sex: string;
    public email: string;
    public password: string;

    constructor(name: string, age: number, sex: string, email: string, password: string) {
        super();
        this._name = name;
        this._age = age;
        this._sex = sex;
        this.email = email;
        this.password = password;
    }
}