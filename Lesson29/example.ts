/* function LogClass(constructor: Function) {
    console.log(`Класс объявлен с названием ${constructor.name}`);
}

@LogClass
class MyClass {
    constructor() {
        console.log("Объект класса создан");
    }
}

const myClass: MyClass = new MyClass(); */


/* function Metadata(metadata: any) {
    return function(constructor: Function) {
        constructor.prototype.metadata = metadata;
    }
}

@Metadata({role: 'admin'})
class User {
    constructor(public name: string) {}
}

const user: User = new User("Богдан");
console.log((user as any).metadata); */

function WrapMethod(target: Function) {
    for(const key of Object.getOwnPropertyNames(target.prototype)) {
        const method = target.prototype[key];

        if (typeof method === "function") {
            target.prototype[key] = function (...args: any[]) {
                console.log(`Метод ${key} был вызван с параметрами ${args}`); // Новое поведение
                return method.apply(this, args); // Выполнение старого поведения
            }
        }
    }
}

@WrapMethod
class MyClass {
    getName(name: string)  {
        console.log(name);
    }

    getMessage(name: string) {
        console.log(`Hello, ${name}`);
    }
}

const myClass: MyClass = new MyClass();

myClass.getName('Peter');
myClass.getMessage('Peter');